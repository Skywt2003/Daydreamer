import { default as CommentCopy } from "@components/blog/Comment.tsx";
import CommentForm from "@components/blog/CommentForm.tsx";
import utils from "@scripts/utils.ts";

interface Props {
  comment: ArticleComment;
  selected: ArticleComment | null;
  setSelected: Function;
  submitComment: Function;
  sending: boolean;
}

export default function Comment(props: Props) {
  return (
    <div className="my-4">
      <div className="flex items-center">
        <img src={props.comment.avatar} className="rounded-full w-12 mr-2" />
        <div className="m-2">
          {props.comment.url ? (
            <a href={props.comment.url} className="link" target="_blank">
              <h4>{props.comment.author}</h4>
            </a>
          ) : (
            <h4>{props.comment.author}</h4>
          )}
          <p className="mt-1">
            <span className="text-secondary">
              {utils.formatTimestamp(props.comment.created)}
            </span>
            {props.comment.status === "approved" ? (
              <span
                className="link ml-2"
                onClick={() => {
                  props.setSelected(props.comment);
                }}
              >
                <i className="ri-reply-line"></i> 回复
              </span>
            ) : (
              <span className="ml-2">
                <i className="ri-admin-line"></i> 待审核
              </span>
            )}
          </p>
        </div>
      </div>
      <p className="mt-2 break-all whitespace-pre-wrap">{props.comment.text}</p>
      {props.comment === props.selected && (
        <CommentForm
          selected={props.selected}
          setSelected={props.setSelected}
          submitComment={props.submitComment}
          sending={props.sending}
        ></CommentForm>
      )}
      <div className="ml-8">
        {props.comment.children.map((child: ArticleComment) => (
          <CommentCopy
            selected={props.selected}
            comment={child}
            setSelected={props.setSelected}
            submitComment={props.submitComment}
            key={child.coid}
            sending={props.sending}
          />
        ))}
      </div>
    </div>
  );
}
