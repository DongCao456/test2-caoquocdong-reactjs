import logo from "./logo.svg";
import "./App.css";
import ListArticle from "./ListArticle";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { PAGINATION } from "./constant";

import "bootstrap-icons/font/bootstrap-icons.css";
import _ from "lodash";
function App() {
  // const [page, setPage] = useState(1);
  const [articleLenght, setArticleLenght] = useState(0);
  const [numberPagi, setNumberPagi] = useState({
    totalPage: 10,
    currentPage: PAGINATION.CURRENT_PAGE,
  });
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.realworld.io/api/articles/?limit=10&offset=${numberPagi.currentPage}`
      )
      .then((res) => {
        setArticle(res.data.articles);
        setNumberPagi({
          ...numberPagi,
          totalPage: Math.ceil(res.data?.articlesCount / PAGINATION.LIMIT),
          // currentPage: PAGINATION.CURRENT_PAGE,
        });
        setIsLoading(false);
      });
  }, [numberPagi.currentPage]);
  console.log(articleLenght);
  // useEffect(() => {
  //   axios
  //     .get(`https://api.realworld.io/api/articles/?limit=10&offset=${page}`)
  //     .then((respone) => setArticle(respone.data.articles));
  // }, [article]);


  const onChangePage = (page) => {
    console.log("page", page);
    setNumberPagi(
      (pre) =>
        (pre = {
          ...pre,
          currentPage: page,
        })
    );
  };

  useEffect(() => {
    console.log(numberPagi.currentPage);
  }, [numberPagi.currentPage]);
  return (
    <div className="content">
      {isLoading && <p>Loading ....</p>}
      {article.length === 0 && !isLoading  && <p>No data</p>}
      {article.length > 0 && (
        <Fragment>
          <ListArticle articles={article}></ListArticle>
          <Pagination
            totalPage={numberPagi.totalPage}
            setPage={onChangePage}
            // postArticle={postArticle}
          ></Pagination>
        </Fragment>
      )}
    </div>
  );
}

export default App;
