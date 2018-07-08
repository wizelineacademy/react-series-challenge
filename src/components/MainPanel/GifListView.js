import React, { Component } from 'react';
import GifView from './GifView';

const GifListView = ({data}) => {
  const gifs = data.map((gif) => (
    <GifView src={gif.url} key={gif.id} />
  ))
  return (
    <div style={{width: '100%'}}>
      {gifs}
    </div>
  )
}

export default GifListView;