import React, { useState, useContext } from 'react'
import { useFetch } from './useFetch'

const NewsContext = React.createContext()

export const NewsProvider = ({children}) => {
  const [query, setQuery] = useState('react')
  const [page, setPage] = useState(0)
  const {loading, news, hits} = useFetch(`search?query=${query}?page=${page}`);
  

  return <NewsContext.Provider value  = {{page, setPage, loading, news, query, setQuery, hits}}>
    {children}
  </NewsContext.Provider>
}

export const useNewsContext = () => {
  return useContext(NewsContext)
}