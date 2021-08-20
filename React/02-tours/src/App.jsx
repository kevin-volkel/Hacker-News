import React, { useState, useEffect } from 'react'
import Tours from './Pages/Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const [error, setError] = useState(false)

  const fetchTours = async() => {
    try{
      const response = await fetch(url)
      const data = await response.json()
      setLoading(false)
      setTours(data)
    }
    catch (error){
      setLoading(false)
      setError(true)
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if(loading) {
    return <main className = "section">
      <div className="spinner"></div>
      <h1>...Loading...</h1> 
    </main>
  }
  if(error){
    return <main className="container">
      <h1>There was a Error...</h1>
    </main>
  }

  return (
    <main className="section">
      <Tours tours={tours}/>
    </main>
  )
}

export default App;
