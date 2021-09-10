import React, { useState, useEffect } from 'react'
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

export const useFetch = (page) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: ""})
  const [news, setNews] = useState([])

}

