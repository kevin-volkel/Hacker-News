import React, { useState, useEffect, useReducer } from "react";
import { useNewsContext } from "./context";
import { reducer } from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/";

const defaultState = {
  loading: true,
  news: [],
  hits: []
};


export const useFetch = (query) => {
  const [hits, setHits] = useState([])
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchNews = async (url) => {
    console.log(url);
    dispatch({type: "SET_LOADING"})
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_NEWS", payload: data})
      setHits(data.hits)
    } catch (error) {
      console.error("ERROR");
    }
  };

  useEffect(() => {
      fetchNews(`${API_ENDPOINT}${query}&tags=story`);
  }, [query]);

  return { state, hits, setHits };
};
