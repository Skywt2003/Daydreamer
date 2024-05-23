export default async (page: number, pageSize: number) => {
  const url = new URL(
    "articles",
    import.meta.env.PUBLIC_API_ENDPOINT as string,
  );
  url.search = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
  }).toString();

  const response = await fetch(url);
  const resObject = await response.json();
  return resObject.data as GotArticle[];
};
