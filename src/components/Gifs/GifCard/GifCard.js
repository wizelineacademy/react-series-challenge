import React from 'react'
import './GifCard.css'

const GifCard = ({gif, addFavorites}) => {
  return (
    <article className="GifCard">
      <a href="#" className="GifCardItem">
        <img
          className="GifImage"
          src={gif.images.downsized.url}
          alt={gif.title}
        />
      </a>
      <div className="GifCardFavorites">
        <span onClick={() => addFavorites(gif)}>favorites</span>
      </div>
    </article>
  )
}

export default GifCard