import { useState } from "react";

export default function Rating() {
  const [selected, setSelected] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const getThanks = (num: number): string => {
    if (num >= 4) return "谢谢你的喜欢！";
    else return "感谢你的评价。";
  };

  return (
    <div className="mt-2">
      <div className="align-center">
        <span>感觉如何？</span>
        <div className="inline-flex px-2">
          {[1, 2, 3, 4, 5].map((i) =>
            i <= selected ? (
              <i
                key={i}
                className={`ri-star-fill px-1 text-xl text-yellow-500${submitted ? "" : " cursor-pointer"}`}
                onClick={() => {
                  if (!submitted) setSelected(i);
                }}
              />
            ) : (
              <i
                key={i}
                className={`ri-star-line px-1 text-xl${submitted ? "" : " cursor-pointer"}`}
                onClick={() => {
                  if (!submitted) setSelected(i);
                }}
              />
            ),
          )}
        </div>
        <span
          className={submitted ? "" : "link"}
          onClick={() => setSubmitted(true)}
        >
          {submitted ? getThanks(selected) : "提交"}
        </span>
      </div>
      {submitted && (
        <p>这个评价组件我还没写后端，所以你的评价不会被提交。你开心就好 😁</p>
      )}
    </div>
  );
}
