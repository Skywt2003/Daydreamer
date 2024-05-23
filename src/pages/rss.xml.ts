import rss, { type RSSFeedItem } from "@astrojs/rss";
import apis from "@scripts/apis";
import markdown from "@scripts/markdown";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const makeRssItem = async (article: GotArticle): Promise<RSSFeedItem> => {
    const articleDetail = await apis.getArticle(article.slug);
    return {
      title: articleDetail.title,
      pubDate: articleDetail.created,
      description: articleDetail.digest,
      link: `/blog/${articleDetail.slug}/`,
      content: markdown.parseContentSimple(articleDetail.text ?? ""),
      author: "me@skywt.cn",
    };
  };

  const articles = await apis.getArticles(1, 20);
  const rssItemsPromises = articles.map(
    async (article) => await makeRssItem(article),
  );
  const rssItems = await Promise.all(rssItemsPromises);

  rssItems.push({
    title: "感谢订阅 SkyWT 的博客。",
    pubDate: new Date("2017-11-01T00:00:00"),
    description: "订阅成功。",
    link: "/blog/",
    content: markdown.parseContentSimple(
      "订阅成功。该 RSS 源显示最近发布的 20 篇文章。当有新文章时，RSS 源会及时更新。\n\n前往[文章归档](https://skywt.cn/blog/archives)页面即可一览全部文章。\n\nRSS 真是个伟大的发明，用开放的标准将独立的内容连接在一起，也将我们连接在一起。",
    ),
    author: "me@skywt.cn",
  });

  return rss({
    title: "SkyWT",
    description: "热爱与激情永不止息。",
    site: context.site || "",
    items: rssItems,
    customData: `<language>zh-cn</language>`,
  });
}
