import { default as CommentCopy } from "./Comment.tsx";
import CommentForm from "./CommentForm.tsx";

interface Props {
  comment: PostComment;
  selected: {
    coid: number;
    author: string;
  };
  handleReply: Function;
  handleSubmit: Function;
  sending: boolean;
}

export default function Comment(props: Props) {
  function formatTimestamp(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${year} 年 ${month} 月 ${day} 日 ${hours}:${minutes}`;
  }

  return (
    <div className="primary-color my-4">
      <div className="flex items-center">
        <img
          src={"https://gravatar.com/avatar/" + props.comment.mailHash}
          className="rounded-full w-12 mr-2"
        />
        <div className="m-2">
          {props.comment.url ? (
            <a href={props.comment.url} className="link" target="_blank">
              <h4>{props.comment.author}</h4>
            </a>
          ) : (
            <h4>{props.comment.author}</h4>
          )}
          <p className="mt-1">
            <span className="secondary-color">
              {formatTimestamp(props.comment.created)}
            </span>
            {props.comment.status === "approved" ? (
              <span
                className="link ml-2 primary-color"
                onClick={() => {
                  props.handleReply(props.comment.coid, props.comment.author);
                }}
              >
                <i className="ri-reply-line"></i> 回复
              </span>
            ) : (
              <span className="ml-2 primary-color">
                <i className="ri-admin-line"></i> 待审核
              </span>
            )}
          </p>
        </div>
      </div>
      <p className="mt-2 break-all">{props.comment.text}</p>
      {props.comment.coid === props.selected.coid && (
        <CommentForm
          selected={props.selected}
          clearReply={() => {
            props.handleReply(0, "");
          }}
          handleSubmit={props.handleSubmit}
          sending={props.sending}
        ></CommentForm>
      )}
      <div className="ml-8">
        {props.comment.children.map((child: PostComment) => (
          <CommentCopy
            selected={props.selected}
            comment={child}
            handleReply={props.handleReply}
            handleSubmit={props.handleSubmit}
            key={child.coid}
            sending={props.sending}
          />
        ))}
      </div>
    </div>
  );
}
