// Using API

export default {
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

