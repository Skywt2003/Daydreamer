export default async (slug: string) => {
  const url = new URL(
    `articles/${slug}`,
    import.meta.env.PUBLIC_API_ENDPOINT as string,
  );

  const response = await fetch(url);
  const resObject = await response.json();
  return resObject.data as GotArticle;
};
