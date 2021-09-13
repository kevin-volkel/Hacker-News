import React from "react";
import NewsStory from "./Components/NewsStory";
import Pagination from "./Components/Pagination";
import SearchForm from "./Components/SearchForm";
import { useNewsContext } from "./util/context";
  
const App = () => {
  const { hits } = useNewsContext();

  return (
    <>
      <SearchForm />
      <Pagination />
      <div className="news">
        {hits.map((hit) => {
          return <NewsStory key = {hit.created_at} {...hit} />;
        })}
      </div>
    </>
  );
};

export default App;
