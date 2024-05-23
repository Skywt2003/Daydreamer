import { useState, useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import Comment from "@components/blog/Comment.tsx";
import CommentForm from "@components/blog/CommentForm.tsx";
import apis from "@scripts/apis";

interface Props {
  articleId: number;
}

export default function Comments(props: Props) {
  const [comments, setComments] = useState<GotComment[]>([]);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState<GotComment | null>(null);
  const [sending, setSending] = useState(false);

  async function submitComment(
    author: string,
    mail: string,
    url: string,
    text: string,
    receiveMail: boolean,
  ) {
    if (sending === true) return;
    setSending(true);

    try {
      const newComment = await apis.postComment(
        author,
        mail,
        url,
        text,
        receiveMail,
        props.articleId,
        selected === null ? null : selected.id,
      );

      if (selected !== null) {
        selected.children.push(newComment);
      } else {
        comments.push(newComment);
      }

      setComments([...comments]);
      setSending(false);
      setSelected(null);
    } catch (err) {
      console.log("Error: ", error);
      // TODO: 这里之后一定要改，太丑了
      alert("抱歉，评论发送失败。");
      setSending(false);
    }
  }

  useEffect(() => {
    function getCount(comments: GotComment[]): number {
      let count = 0;
      comments.forEach((comment) => {
        count++;
        count += getCount(comment.children);
      });
      return count;
    }

    apis
      .getComments(props.articleId)
      .then((data) => {
        setComments(data);
        setCount(getCount(data));
      })
      .catch((err) => {
        console.log("Error: ", err);
        setError(true);
      });
  }, []);

  return (
    <CookiesProvider
      defaultSetOptions={{
        path: "/",
        maxAge: 2592000,
        sameSite: "lax",
        domain: import.meta.env.PUBLIC_COOKIE_DOMAIN,
      }}
    >
      {error ? (
        <>
          <h2>
            <i className="ri-discuss-line"></i>
            {" 评论"}
          </h2>
          <p className="card card--in-content my-4">🚧 抱歉，获取评论失败。</p>
        </>
      ) : (
        <>
          <h2>
            <i className="ri-discuss-line"></i>
            {count > 0 ? " 共 " + count + " 条评论" : " 暂无评论"}
          </h2>
          {comments.map((comment) => (
            <Comment
              comment={comment}
              selected={selected}
              setSelected={setSelected}
              submitComment={submitComment}
              key={comment.id}
              sending={sending}
            ></Comment>
          ))}
        </>
      )}
      <hr className="my-8" />
      <h2>
        <i className="ri-discuss-line"></i>
        {" 发表新的评论"}
      </h2>
      {selected === null ? (
        <CommentForm
          selected={selected}
          setSelected={setSelected}
          submitComment={submitComment}
          sending={sending}
        ></CommentForm>
      ) : (
        <div className="mt-4">
          <span
            className="link underline"
            onClick={() => {
              setSelected(null);
            }}
          >
            取消评论回复
          </span>
        </div>
      )}
    </CookiesProvider>
  );
}
