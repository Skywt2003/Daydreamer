export default async (
  author: string,
  mail: string,
  url: string,
  text: string,
  receiveMail: boolean,
  articleId: number,
  parentId: number | null,
) => {
  const api = new URL(
    `comments`,
    import.meta.env.PUBLIC_API_ENDPOINT as string,
  );
  const data = { author, mail, url, text, receiveMail, articleId, parentId };

  const response = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (response.ok === false)
    throw Error("HTTP Error " + response.status + " " + response.statusText);
  const resObject = await response.json();
  return resObject.data as GotComment;
};
