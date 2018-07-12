import React from 'react';
import GifList from './GifList/GifList'
import { GifContainer } from './Gifs.styled'

const Gifs = (props) => (
  <GifContainer >
    <h2>{props.title}</h2>
    <GifList data={props.gifs} addFavorites={props.addFavorites}/>
  </GifContainer>
);

export default Gifs;