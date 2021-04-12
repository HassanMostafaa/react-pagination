import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <nav className="">
      <span
        style={{
          position: "fixed",
          bottom: "0px",
          left: "50%",
          padding: "0 10px",
          borderRadius: "10px 10px 0px 0",
          background: "#f4f4f4",
          transform: "translateX(-50%)",
          zIndex: "8",
          color: "#333",
        }}
      >
        &laquo;{currentPage}&raquo; out of {pageNumbers.length}
      </span>
      <ul className=" pagination">
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className={
                currentPage === number ? "page-item active " : "page-item "
              }
            >
              <a
                href="javascript:void(0)"
                onClick={() => {
                  paginate(number);
                }}
                className={currentPage === number ? "page-link  " : "page-link"}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
