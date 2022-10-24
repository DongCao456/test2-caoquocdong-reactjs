import React, { useState } from "react";

export default function Pagination({ totalPage, setPage, page }) {
  const arrPage = [];
  for (let i = 1; i <= totalPage; i++) {
    arrPage.push(i);
  }
  const [seleteced, setSelected] = useState(1);
  return (
    <div>
      <ul class="pagination">
        {arrPage.map((item, index) => (
          <li class={page === item ? "active" : ""}>
            <a href="#" onClick={() => setPage(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
