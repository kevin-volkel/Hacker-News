import React, { useState } from "react";
import { useNewsContext } from "../util/context";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Pagination = () => {
  const { page, setPage, news, newPage, setNewPage } = useNewsContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!Number(newPage)) {
      setNewPage(page + 1)
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
    switch (dir){
      case 'left':
        setNewPage(page <= 0 ? news.nbPages : page )
        setPage(page <= 0 ? news.nbPages - 1 : page - 1)
        break;
      case 'right':
        setNewPage(page + 1 >= news.nbPages ? 1 : page + 2)
        setPage(page + 1 >= news.nbPages ? 0 : page + 1)
        break;
      case 'hard-right':
        setNewPage(news.nbPages)
        setPage(news.nbPages - 1)
        break;
      case 'hard-left':
        setNewPage(1)
        setPage(0)
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="pagination">
      <AiOutlineDoubleLeft
        className="arrow"
        onClick={() => {handleClick('hard-left')}}
        />
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
      <AiOutlineDoubleRight
        className="arrow"
        onClick={() => {handleClick('hard-right')}}
        />
    </form>
  );
};

export default Pagination;
