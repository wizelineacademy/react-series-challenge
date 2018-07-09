import React from 'react';
import GifList from './GifList/GifList'
import './Gif.css';

const Gifs = (props) => (
  <main className="GifContainer">
    <h2>{props.title}</h2>
    <GifList data={props.gifs} addFavorites={props.addFavorites}/>
  </main>
);

export default Gifs;