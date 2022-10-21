import React from "react";

export default function Pagination({ totalPage, setPage }) {
  const arrPage = [];
  for (let i = 1; i <= totalPage; i++) {
    arrPage.push(i);
  }
  return (
    <div className="pagination">
      <button>&laquo;</button>
      {arrPage.map((item, index) => (
        <button onClick={() => setPage(item)} key={index}>
          {item}
        </button>
      ))}
      <button>&raquo;</button>
    </div>
  );
}
