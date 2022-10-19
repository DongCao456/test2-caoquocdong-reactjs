import React from "react";
export default function ListArticle({ a, postArticle }) {
  return (
    <div id="main">
      <div class="left_side">
        {a.map((item, index) => (
          <div>
            <h2>
              <a href="#">{item?.author?.username}</a>
            </h2>
            <h3>{item.createdAt}</h3>
            <div class="img">
              <img src={item?.author.image} alt="" />
            </div>
            {item.slug}
            <p class="date">
              Posted by David <img src="images/more.gif" alt="" />{" "}
              <a href="#">Read more</a> <img src="images/comment.gif" alt="" />{" "}
              <a href="#">Comments (3)</a>{" "}
              <a href="#" onClick={() => postArticle(item.slug)}>
                {item.favorited ? (
                  <i class="bi bi-heart-fill"></i>
                ) : (
                  <i class="bi bi-heart"></i>
                )}

                {item.favoritesCount}
              </a>{" "}
              <img src="images/timeicon.gif" alt="" /> 21.02.
            </p>
            <br />
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
