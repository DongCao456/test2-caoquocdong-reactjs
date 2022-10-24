import React, { useState } from "react";
import { resizeParagph, resizeParagph1 } from "./constant";
export default function ListArticle({ a }) {
  const [read, setRead] = useState(false);
  const clickRead = (event) => {
    event.preventDefault();
    setRead(!read);
  };
  return (
    <div>
      <div>
        <h2>
          <a href="#">{a?.author?.username}</a>
        </h2>
        <h3>{a.createdAt}</h3>
        <div class="img">
          <img src={a?.author?.image} alt="" />
        </div>
        {read ? a.slug : resizeParagph(a.slug)}
        <p class="date">
          Posted by David <img src="images/more.gif" alt="" />{" "}
          <a href="#" onClick={clickRead}>
            {read ? "Read Less" : "Read More"}
          </a>{" "}
          <img src="images/comment.gif" alt="" /> <a href="#">Comments (3)</a>{" "}
          <a href="#">
            {a.favorited ? (
              <i class="bi bi-heart-fill"></i>
            ) : (
              <i class="bi bi-heart"></i>
            )}

            {a.favoritesCount}
          </a>{" "}
          <img src="images/timeicon.gif" alt="" /> 21.02.
        </p>
        <br />
      </div>
    </div>
  );
}
