import React from 'react';
import GifList from './GifList/GifList'
import './Gif.css';

const Gifs = (props) => (
  <main className="GifContainer">
    <h2>Trending Now</h2>
    <GifList data={props.gifs}/>
  </main>
);

export default Gifs;