import React from "react";
import { useNewsContext } from "../util/context";

const SearchForm = () => {
  const { query, setQuery, setPage } = useNewsContext();

  const handleChange = (e) => {
    setQuery(e.target.value)
    setPage(0)
  }
  return (
    <form onSubmit={(e) => e.preventDefault} className="search-form">
      <h2>Search Hacker News</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
