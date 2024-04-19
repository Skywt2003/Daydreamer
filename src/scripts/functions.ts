// Using API

const api = {
  getTimeline: async (page: number, pageSize: number) => {
    const url = new URL("timeline", import.meta.env.PUBLIC_API_ENDPOINT as string);
    url.search = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString()
    }).toString();

    const response = await fetch(url);
    const data = await response.json();
    return data as ArticleInTimeline[];
  },

  getArticle: async (slug: string) => {
    const url = new URL(
      `article/${slug}`,
      import.meta.env.PUBLIC_API_ENDPOINT as string
    );
    const response = await fetch(url);
    const data = await response.json();
    return data as Article;
  },

  getComments: async (slug: string) => {
    const url = new URL(
      `article/${slug}/comments`,
      import.meta.env.PUBLIC_API_ENDPOINT as string,
    );
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    return data as ArticleComment[];
  },
  postComments: async (
    slug: string,
    author: string,
    mail: string,
    url: string,
    text: string,
    receiveMail: boolean,
    parent: ArticleComment | null
  ) => {
    const api = new URL(
      `article/${slug}/comments`,
      import.meta.env.PUBLIC_API_ENDPOINT as string,
    );
    const data = {
      text,
      author,
      mail,
      url,
      receiveMail,
      parent: parent ? parent.coid : 0
    };
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    if (response.ok === false)
      throw Error(
        "HTTP Error " + response.status + " " + response.statusText,
      );
    const res = await response.json();
    return res as ArticleComment;
  }
}

// Parse Markdown

// remarkable 的 @types 似乎存在错误；其两个插件则都没有类型定义
import { Remarkable, utils as u } from "remarkable";
import rkatex from "remarkable-katex";
import toc from "markdown-toc";
import hljs from "highlight.js";

const markdown = {
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
  }
}

// utils

const utils = {
  formatTimestamp: function (timestamp: number) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${year} 年 ${month} 月 ${day} 日 ${hours}:${minutes}`;
  },

  formatMonthDay: function (timestamp: number) {
    const date = new Date(timestamp);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}-${day}`;
  }
}

export { api, markdown, utils };

