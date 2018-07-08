import React, { Component } from 'react';
import GifView from './GifView';

const GifListView = ({data}) => {
  const gifs = data.map((gif) => (
    <GifView src={gif.url} key={gif.id} id={gif.id} gif={gif} />
  ))
  return (
    <div style={{width: '80%', margin:'10px auto'}}>
      {gifs}
    </div>
  )
}

export default GifListView;