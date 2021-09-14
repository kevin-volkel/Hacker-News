import React from "react";
import NewsStory from "./Components/NewsStory";
import Pagination from "./Components/Pagination";
import SearchForm from "./Components/SearchForm";
import Spinner from "./Components/Spinner";
import { useNewsContext } from "./util/context";

const App = () => {
  const { hits, loading } = useNewsContext();

  return (
    <>
      <SearchForm />
      <Pagination />
      {loading ? (
        <Spinner/>
      ) : (
        <div className="news">
          {hits.map((hit) => {
            return <NewsStory key={hit.created_at_i} {...hit} id = {hit.created_at_i}/>;
          })}
        </div>
      )}
    </>
  );
};

export default App;
