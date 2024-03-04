import { default as CommentCopy } from "./Comment.tsx";

export default function Comment(props: { comment: Comment }) {
  function formatTimestamp(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${year} 年 ${month} 月 ${day} 日 ${hours}:${minutes}`;
  }

  return (
    <div class="primary-color my-4">
      <div class="flex items-center">
        <img
          src={"https://gravatar.com/avatar/" + props.comment.mailHash}
          class="rounded-full w-12 mr-2"
        />
        <div class="m-2">
          {props.comment.url ? (
            <a href={props.comment.url} class="link" target="_blank">
              <h4>{props.comment.author}</h4>
            </a>
          ) : (
            <h4>{props.comment.author}</h4>
          )}
          <p class="mt-1">{formatTimestamp(props.comment.created)}</p>
        </div>
      </div>
      <p class="mt-2 break-all">{props.comment.text}</p>
      <div class="ml-8">
        {props.comment.children.map((child: Comment) => (
          <CommentCopy comment={child} />
        ))}
      </div>
    </div>
  );
}
