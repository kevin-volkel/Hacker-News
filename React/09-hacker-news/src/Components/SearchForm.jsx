import React from "react";
import { useNewsContext } from "../util/context";

const SearchForm = () => {
  const { query, setQuery } = useNewsContext();
  return (
    <form onSubmit={(e) => e.preventDefault} className="search-form">
      <h2>Search Hacker News</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
