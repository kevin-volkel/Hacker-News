import React, { useState, useEffect } from "react";
const API_ENDPOINT = "https://hn.algolia.com/api/v1/";

export const useFetch = (query) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [hits, setHits] = useState([])

  const fetchNews = async (url) => {
    setLoading(true);
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data);
      setHits(data.hits || [])
      setLoading(false);
    } catch (error) {
      console.error("ERROR");
    }
  };

  useEffect(() => {
      fetchNews(`${API_ENDPOINT}${query}&tags=story`);
  }, [query]);

  return { loading, news, hits };
};
