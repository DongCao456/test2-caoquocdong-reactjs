import axios from "axios";
import React from "react";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjM0NTY3OEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InBvc3RlciIsImlhdCI6MTY2NjE3MTg5MCwiZXhwIjoxNjcxMzU1ODkwfQ.P22R2OOd7B6CXZH-1-LkU1oFwJHOXSQ_LN3PswbHge4";
export default function ListArticle({ articles, postArticle }) {
  const favorite = (slug) => {
    axios
      .post(`https://api.realworld.io/api/articles/${slug}/favorite`, null, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((response) => {
        console.log("response", response);
      });
  };
  return (
    <div id="main">
      <div className="left_side">
        {articles.map((item, index) => (
          <div>
            <h2>
              <a href="#">{item?.author?.username}</a>
            </h2>
            <h3>{item.createdAt}</h3>
            <div className="img">
              <img src={item?.author.image} alt="" />
            </div>
            {item.slug}
            <p className="date">
              Posted by David <img src="images/more.gif" alt="" />{" "}
              <a href="#">Read more</a> <img src="images/comment.gif" alt="" />{" "}
              <a href="#">Comments (3)</a>{" "}
              <a href="#" onClick={() => favorite(item.slug)}>
                {item.favorited ? (
                  <i className="bi bi-heart-fill"></i>
                ) : (
                  <i className="bi bi-heart"></i>
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
