// Parse Markdown
// 注意：由于 markdown-toc 模块的限制，
// 该模块代码只支持服务端运行

// remarkable 的 @types 似乎存在错误；其两个插件则都没有类型定义
import { Remarkable, utils as u } from "remarkable";
import rkatex from "remarkable-katex";
import toc from "markdown-toc";
import hljs from "highlight.js";

export default {
  parseContent: (text: string) => {
    const parser = new Remarkable({
      html: true,
      breaks: true,
      highlight: function (code: string, lang: string): string {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    });
    parser.use(rkatex);

    // 该函数在 h 标签内添加锚点，用于 TOC 跳转定位
    // 考虑标题重复的情况，需要哈希表记录
    // 生成 slug 的规则是：slugify 之后，如果重复，则加后缀 -1
    // 然后 -2、-3，依此类推
    const hash: Record<string, number> = {};
    parser.renderer.rules.heading_open = (tokens: any[], idx: number) => {
      const tok = tokens[idx];
      const tokContent = tokens[idx + 1];

      const content: string = tokContent.content;
      if (hash[content] === undefined) {
        hash[content] = 0;
      } else {
        hash[content]++;
      }
      const slug = toc.slugify(content, { num: hash[content] });
      const heading = `<h${tok.hLevel}>`;
      const anchor = `<a id="${slug}" class="heading-anchor"></a>`;
      return heading + anchor;
    };

    parser.renderer.rules.image = (tokens: any[], idx: number) => {
      const src = u.escapeHtml(tokens[idx].src);
      const title = tokens[idx].title
        ? u.escapeHtml(u.replaceEntities(tokens[idx].title))
        : "";
      const alt = tokens[idx].alt
        ? u.escapeHtml(u.replaceEntities(u.unescapeMd(tokens[idx].alt)))
        : "";
      const fancybox_opening = `<a href="${src}" data-fancybox data-caption="${title}">`;
      const image = `<img src="${src}" alt="${alt}" title="${title}" />`;
      const fancybox_closing = `</a>`;
      return fancybox_opening + image + fancybox_closing;
    };

    const tocGenerator = new Remarkable({
      html: true,
      breaks: true,
    });
    tocGenerator.use(toc.plugin({}));

    let tocContent = tocGenerator.render(text).content;
    if (tocContent !== "") {
      tocContent = "## 文章目录\n\n" + tocContent;
    }
    return parser.render(tocContent + "\n\n" + text);
  },

  parseContentSimple: (text: string) => {
    const parser = new Remarkable({
      html: true,
      breaks: true,
    });

    return parser.render(text);
  },
};
