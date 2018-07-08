import React from 'react';
import Star from './Star';

const GifView = ({ src, id, favorite, gif }) => (
  <div style={{display: 'inline-block', padding: 10}} className="GifView">
    <img style={{width:150, height:100, objectFit:'contain'}} src={src} />
    <Star active={favorite} id={id} gif={gif} />
  </div>
)

export default GifView;