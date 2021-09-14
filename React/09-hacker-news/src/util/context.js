import React, { useState, useContext } from 'react'
import { useFetch } from './useFetch'

const NewsContext = React.createContext()

export const NewsProvider = ({children}) => {
  const [query, setQuery] = useState('google')
  const [page, setPage] = useState(0)
  const [newPage, setNewPage] = useState(1)
  const { state, hits, setHits } = useFetch(`search?query=${query}&page=${page}`);
  const {loading, news} = state;

  return <NewsContext.Provider value  = {{page, setPage, loading, news, query, setQuery, hits, setHits, newPage, setNewPage}}>
    {children}
  </NewsContext.Provider>
}

export const useNewsContext = () => {
  return useContext(NewsContext)
}