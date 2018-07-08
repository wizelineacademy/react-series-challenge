import React from 'react'
import './GifCard.css'

const GifCard = ({src}) => (
  <article className="GifCard">
    <a href="#" className="GifCardItem">
      <img
        className="GifImage"
        src={src}
        alt=""
      />
    </a>
    <div className="GifCardFavorites">
      <span>favorites</span>
    </div>
  </article>
)

export default GifCard