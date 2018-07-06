import React from 'react';

import starFav from './favorite.png';
import starNotFav from './addToFavorites.png';

const Star = ({ active }) => (
  <img src={active? starFav:starNotFav} />
)

const GifView = ({ src, favorite }) => (
  <div className="GifView">
    <img style={{width:150, height:100, objectFit:'contain'}} src={src} />
    <Star active={favorite} />
  </div>
)

export default GifView;