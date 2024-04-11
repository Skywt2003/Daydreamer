import { useState, useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import Comment from "./Comment.tsx";
import CommentForm from "./CommentForm.tsx";

import md5 from "crypto-js/md5";

interface Props {
  slug: string;
  permalink: string;
}

interface Selected {
  coid: number;
  author: string;
}

interface CommentAPI {
  slug: string;
  text: string;
  author: string;
  mail: string;
  url: string;
  token: string;
  parent?: number;
}

export default function Comments(props: Props) {
  const [comments, setComments] = useState<PostComment[]>([]);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState<Selected>({ coid: 0, author: "" });
  const [sending, setSending] = useState(false);

  function submitComment(
    author: string,
    email: string,
    url: string,
    content: string,
  ) {
    if (sending === true) return;
    setSending(true);

    // 此处更优雅的写法是 .env.production 和 .env.development
    // 之后再改
    const api = new URL("https://blog.skywt.cn/api/comment");
    // const api = new URL("http://localhost:3000/api/comment");
    const data: CommentAPI = {
      slug: props.slug,
      text: content,
      author,
      mail: email,
      url,
      token: "",
    };
    if (selected.coid !== 0) data.parent = selected.coid;
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok === false)
          throw Error(
            "HTTP Error " + response.status + " " + response.statusText,
          );
        return response.json();
      })
      .then((res) => {
        // 本应该使用服务器返回的数据 res 生成新的 comment 对象
        // 但是 RestFul 插件后端没实现这个
        // 之后自己实现后端再改这里
        const thisComment: PostComment = {
          coid: Math.floor(Math.random() * 10000) + 10000, // 暂时性解决方案，必须保证和现有 coid 不重复
          parent: selected.coid,
          cid: -1, // 本应该是本文 cid，但是没使用，无影响
          created: Math.floor(Date.now() / 1000), // 这里的时间也可能会和服务器上的有出入
          author,
          url,
          text: content,
          status: "wating",
          mailHash: md5(email).toString(), // 为了这个还要 CryptoJS！
          children: [],
        };
        setComments([...comments, thisComment]);
        setSending(false);
        setSelected({ coid: 0, author: "" });
      })
      .catch((error) => {
        console.log("Error: ", error);
        // 这里之后一定要改，太丑了
        alert("抱歉，评论发送失败。");
        setSending(false);
      });
  }

  useEffect(() => {
    function getCount(comments: PostComment[]): number {
      let count = 0;
      comments.forEach((comment) => {
        count++;
        count += getCount(comment.children);
      });
      return count;
    }

    const url = new URL("https://blog.skywt.cn/api/comments");
    // const url = new URL("http://localhost:3000/api/comments");
    url.search = new URLSearchParams({
      page: "1",
      pageSize: "100",
      order: "asc",
      slug: props.slug,
    }).toString();

    fetch(url, {
      method: "GET",
      credentials: "include",
    })
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
    <CookiesProvider
      defaultSetOptions={{
        path: "/",
        maxAge: 2592000,
        sameSite: "lax",
        domain: ".skywt.cn",
      }}
    >
      {error ? (
        <>
          <h2>
            <i className="ri-discuss-line"></i>
            {" 评论"}
          </h2>
          <p className="primary-color card my-4 p-2">
            🚧 抱歉，获取评论失败。请前往
            <a href={props.permalink} className="link underline">
              原博客的这篇文章
            </a>
            底部评论区查看评论。
          </p>
        </>
      ) : (
        <>
          <h2>
            <i className="ri-discuss-line"></i>
            {count > 0 ? " 共 " + count + " 条评论" : " 暂无评论"}
          </h2>
          {comments.map((comment: PostComment) => (
            <Comment
              comment={comment}
              selected={selected}
              handleReply={(coid: number, author: string) => {
                setSelected({ coid, author });
              }}
              handleSubmit={submitComment}
              key={comment.coid}
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
      {selected.coid === 0 ? (
        <CommentForm
          selected={selected}
          clearReply={() => {
            setSelected({ coid: 0, author: "" });
          }}
          handleSubmit={submitComment}
          sending={sending}
        ></CommentForm>
      ) : (
        <div className="mt-4">
          <span
            className="link underline primary-color"
            onClick={() => {
              setSelected({ coid: 0, author: "" });
            }}
          >
            取消评论回复
          </span>
        </div>
      )}
    </CookiesProvider>
  );
}
