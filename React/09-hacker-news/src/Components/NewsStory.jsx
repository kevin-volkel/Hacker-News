import React, { useState } from 'react'
import { useNewsContext } from '../util/context';



const NewsStory = ({ title, url, points, num_comments, author, id }) => {
  const {hits, setHits} = useNewsContext();
    
  return (
    <div className = "news-story">
      <h2 className="title">{title || "Default"}</h2>
      <h3 className="info">{points} points by {author} | {num_comments || Math.floor(Math.random() * 500)} comments</h3>
      <div className="button-container">
        <a className = "url" href={url || 'www.google.com'}>Read More</a>
        <button onClick = {() => {setHits(hits.filter( (hit) => hit.created_at_i !== id))}}>Remove</button>
      </div>
    </div>
  )
}

export default NewsStory
