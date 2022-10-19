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
  const [page, setPage] = useState(1);
  const [articleLenght, setArticleLenght] = useState(0);
  const [numberPagi, setNumberPagi] = useState({
    totalPage: 10,
    curentpage: pagin.CURRENTPAGE,
  });
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.realworld.io/api/articles/?limit=10&offset=${page}`)
      .then((res) => setArticleLenght(res.data.articlesCount));
    setNumberPagi({
      ...numberPagi,
      totalPage: 10,
      curentpage: pagin.CURRENTPAGE,
    });
  }, [articleLenght]);
  console.log(articleLenght);
  useEffect(() => {
    axios
      .get(`https://api.realworld.io/api/articles/?limit=10&offset=${page}`)
      .then((respone) => setArticle(respone.data.articles));
  }, [article]);

  const postArticle = (slug) => {
    axios
      .post(`https://api.realworld.io/api/articles/${slug}/favorite`)
      .then((respone) => setArticle(respone.data));
  };
  return (
    <div className="content">
      <ListArticle a={article}></ListArticle>
      <Pagination
        totalPage={numberPagi.totalPage}
        setPage={setPage}
        postArticle={postArticle}
      ></Pagination>
    </div>
  );
}

export default App;
