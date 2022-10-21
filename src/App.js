import logo from "./logo.svg";
import "./App.css";
import ListArticle from "./ListArticle";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { pagin } from "./constant";

import "bootstrap-icons/font/bootstrap-icons.css";
import _ from "lodash";
function App() {
  const tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjM0NTY3OEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InBvc3RlciIsImlhdCI6MTY2NjE3MjI1NSwiZXhwIjoxNjcxMzU2MjU1fQ.h1F2e5B6F7s-kUsII1mIrPmXr1fyF4xaUicpEU0pyR4";
  const headers = { Authorization: `Bearer ${tokenStr}` };
  const [page, setPage] = useState(1);
  const [articleLenght, setArticleLenght] = useState(0);
  const [numberPagi, setNumberPagi] = useState({
    totalPage: 10,
    curentpage: pagin.CURRENTPAGE,
  });
  const [article, setArticle] = useState([]);
  const [articleLike, setArticleLike] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.realworld.io/api/articles/?limit=10&offset=${page}`)
      .then((res) => setArticleLenght(res.data.articlesCount));
    setNumberPagi({
      ...numberPagi,
      totalPage: 10,
      curentpage: pagin.CURRENTPAGE,
    });
  }, [articleLike]);
  console.log(articleLenght);
  useEffect(() => {
    axios
      .get(`https://api.realworld.io/api/articles/?limit=10&offset=${page}`)
      .then((response) => setArticle(response.data.articles));
  }, [article]);

  const postArticle = (event, slug) => {
    event.preventDefault();
    axios
      .post(`https://api.realworld.io/api/articles/${slug}/favorite`, null, {
        headers,
      })
      .then((response) => console.log(response));
  };

  return (
    <div className="content">
      <ListArticle a={article} postArticle={postArticle}></ListArticle>
      <Pagination
        totalPage={numberPagi.totalPage}
        setPage={setPage}
      ></Pagination>
    </div>
  );
}

export default App;
