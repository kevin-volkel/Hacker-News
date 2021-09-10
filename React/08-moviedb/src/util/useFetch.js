import { useState, useEffect } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&`;


//searchQuery will be something like &s=batman
export const useFetch = (searchQuery) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);

  //url is always the API_ENDPOINT + the search query
  const fetchMovie = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
        console.log(`error`);
      }
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect( () => {
    fetchMovie(`${API_ENDPOINT}${searchQuery}`)
  }, [searchQuery])

  return {loading, error, movies}
};
