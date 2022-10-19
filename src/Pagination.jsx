import React from "react";

export default function Pagination({ totalPage, setPage }) {
  const arrPage = [];
  for (let i = 1; i <= totalPage; i++) {
    arrPage.push(i);
  }
  return (
    <div class="pagination">
      <a href="#">&laquo;</a>
      {arrPage.map((item, index) => (
        <a href="#" onClick={() => setPage(item)}>
          {item}
        </a>
      ))}
      <a href="#">&raquo;</a>
    </div>
  );
}
