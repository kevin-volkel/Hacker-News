import React, { useState } from 'react'

const NewsStory = ({ title, url, points, num_comments, author }) => {
  return (
    <div className = "news-story">
      <h2 className="title">{title || "Default"}</h2>
      <h3 className="info">{points} points by {author} | {num_comments || Math.floor(Math.random() * 500)} comments</h3>
      <a className = "url" href={url || 'www.google.com'}>Read More</a>
    </div>
  )
}

export default NewsStory
