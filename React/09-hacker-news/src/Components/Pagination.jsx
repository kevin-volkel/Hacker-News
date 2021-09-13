import React, { useState } from "react";
import { useNewsContext } from "../util/context";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = () => {
  const { page, setPage, news } = useNewsContext();

  return <div className="pagination">
    <AiOutlineArrowLeft onclick = { () => setPage(page - 1)}/>
    <p className="pages">Page {page} of {news.nbPages}</p>
    <AiOutlineArrowRight onclick = { () => setPage(page + 1)}/>
  </div>;
};

export default Pagination;
