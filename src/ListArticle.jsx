import React, { useState } from "react";
import { resizeParagph, resizeParagph1 } from "./constant";
export default function ListArticle({ articleItem }) {
  const [read, setRead] = useState(false);
  const clickRead = (event) => {
    setRead(!read);
    event.preventDefault();
  };
  return (
    <div>
      <div>
        <h2>
          <a href="#">{articleItem?.author?.username}</a>
        </h2>
        <h3>{articleItem.createdAt}</h3>
        <div class="img">
          <img src={articleItem?.author?.image} alt="" />
        </div>
        {read ? articleItem.slug : resizeParagph(articleItem.slug)}
        <p class="date">
          Posted by David <img src="images/more.gif" alt="" />{" "}
          <a href="#" onClick={clickRead}>
            {read ? "Read Less" : "Read More"}
          </a>{" "}
          <img src="images/comment.gif" alt="" /> <a href="#">Comments (3)</a>{" "}
          <a href="#">
            {articleItem.favorited ? (
              <i class="bi bi-heart-fill"></i>
            ) : (
              <i class="bi bi-heart"></i>
            )}

            {articleItem.favoritesCount}
          </a>{" "}
          <img src="images/timeicon.gif" alt="" /> 21.02.
        </p>
        <br />
      </div>
    </div>
  );
}
