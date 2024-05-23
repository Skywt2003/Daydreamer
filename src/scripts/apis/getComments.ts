export default async (articleId: number) => {
  const url = new URL(
    `comments`,
    import.meta.env.PUBLIC_API_ENDPOINT as string,
  );
  url.search = new URLSearchParams({
    articleId: articleId.toString(),
  }).toString();

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  const resObject = await response.json();
  return resObject.data as GotComment[];
};
