import React, { Component } from 'react';
import GifView from './GifView';

import StyledGifListView from '../styled/GifListView.styled.js';

const GifListView = ({data}) => {
  const gifs = data.map((gif) => (
    <GifView 
      src={gif.url} 
      key={gif.id} 
      id={gif.id} 
      gif={gif} 
      favorite={gif.favorite} 
    />
  ))
  return (
    <StyledGifListView>
      {gifs}
    </StyledGifListView>
  )
}

export default GifListView;