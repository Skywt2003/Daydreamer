import { useState, useEffect } from "preact/hooks";
import Comment from "./Comment.tsx";

export default function Comments(props: { slug: string; permalink: string }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);

  function getCount(comments: Comment[]): number {
    let count = 0;
    for (const comment of comments) {
      count++;
      count += getCount(comment.children);
    }
    return count;
  }

  useEffect(() => {
    const url = new URL("https://blog.skywt.cn/api/comments");
    url.search = new URLSearchParams({
      page: "1",
      pageSize: "100",
      order: "desc",
      slug: props.slug,
    }).toString();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.data.dataSet);
        setCount(getCount(data.data.dataSet));
      })
      .catch((error) => {
        console.log("Error: ", error);
        setError(true);
      });
  }, []);

  return (
    <>
      {error ? (
        <>
          <h2>
            <i class="ri-discuss-line"></i>
            {" 评论"}
          </h2>
          <p class="primary-color card my-4 p-2">
            🚧 抱歉，获取评论失败。请前往
            <a href={props.permalink} class="link underline">
              原博客的这篇文章
            </a>
            底部评论区查看评论。
          </p>
        </>
      ) : (
        <>
          <h2>
            <i class="ri-discuss-line"></i>
            {count > 0 ? " 共 " + count + " 条评论" : " 暂无评论"}
          </h2>
          {comments.map((comment: Comment) => (
            <Comment comment={comment}></Comment>
          ))}
        </>
      )}

      <hr class="my-8" />

      <h2>
        <i class="ri-discuss-line"></i>
        {" 发表评论"}
      </h2>
      <p class="primary-color card my-4 p-2">
        🚧 新博客系统的评论功能仍在开发中，敬请期待。可以前往
        <a href={props.permalink} class="link underline">
          原博客的这篇文章
        </a>
        底部评论区发表评论。
      </p>
    </>
  );
}
