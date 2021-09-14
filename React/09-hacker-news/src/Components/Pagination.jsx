import React, { useState } from "react";
import { useNewsContext } from "../util/context";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = () => {
  const { page, setPage, news, newPage, setNewPage } = useNewsContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!Number(newPage)) {
      return;
    }
    if (newPage <= 0) {
      setNewPage(1);
      setPage(0);
    } else if (newPage > news.nbPages) {
      setNewPage(news.nbPages);
      setPage(news.nbPages - 1)
    }else{
      setPage(newPage - 1);
    }
  };

  const handleClick = (dir) => {
    if(dir === 'left'){
      setPage(page <= 0 ? news.nbPages - 1 : page - 1)
    }
    if(dir === 'right'){
      setPage(page + 1 >= news.nbPages ? 0 : page + 1)
    }
    setNewPage(page + 1)
  }

  return (
    <form onSubmit={handleSubmit} className="pagination">
      <AiOutlineArrowLeft
        className="arrow"
        onClick={() => {handleClick('left')}}
      />
      <div className="pages">
        Page {" "}
        <input
          type="text"
          value={newPage}
          onChange={(e) => setNewPage(e.target.value)}
        />{" "}
        of {news.nbPages}
      </div>
      <AiOutlineArrowRight
        className="arrow"
        onClick={() => {handleClick('right')}}
      />
    </form>
  );
};

export default Pagination;
