import logo from "./logo.svg";
import "./App.css";
import ListArticle from "./ListArticle";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { PAGINATIONCONST, resizeParagph, resizeParagph1 } from "./constant";

import "bootstrap-icons/font/bootstrap-icons.css";
import _ from "lodash";
function App() {
  const tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjM0NTY3OEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InBvc3RlciIsImlhdCI6MTY2NjQwNjMxMSwiZXhwIjoxNjcxNTkwMzExfQ.IPa-RBRomRl3n5H45KltHmTFsKGd727_9n5nSZLdUSY";
  const headers = { Authorization: `Bearer ${tokenStr}` };
  const [user, setUser] = useState("");
  const [numberPagi, setNumberPagi] = useState({
    totalPage: 10,
    curentpage: PAGINATIONCONST.CURRENTPAGE,
  });
  const [article, setArticle] = useState([]);
  const [heart, setHeart] = useState("");

  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(false);
  // const clickRead = (event, number) => {
  //   event.preventDefault();
  //   setRead(!read);
  //   setSelected(number);
  //   console.log(number);
  // };
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.realworld.io/api/articles/?limit=${PAGINATIONCONST.LIMIT}&offset=${numberPagi.curentpage}`
      )
      .then((res) => {
        setArticle(res.data.articles);
        setNumberPagi({
          ...numberPagi,
          totalPage: Math.ceil(res.data?.articlesCount / PAGINATIONCONST.LIMIT),
        });
        setLoading(false);
      });
  }, [numberPagi.curentpage]);

  const onchangePage = (page) => {
    setNumberPagi((pre) => (pre = { ...pre, curentpage: page }));
  };

  const postArticle = (event, slug) => {
    event.preventDefault();
    console.log(headers);
    axios
      .delete(`https://api.realworld.io/api/articles/${slug}/favorite`, {
        headers,
      })
      .then((response) => {
        console.log(response.data);
        setArticle([...article]);
      });
  };

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {article.length === 0 && !loading && <p>No Data</p>}
      {article.length > 0 && (
        <Fragment>
          <div id="main">
            <div class="left_side">
              {article.map((item, index) => (
                <ListArticle a={item}></ListArticle>
              ))}
            </div>
          </div>

          <Pagination
            totalPage={numberPagi.totalPage}
            setPage={onchangePage}
            page={numberPagi.curentpage}
          ></Pagination>
        </Fragment>
      )}
    </div>
  );
}

export default App;
