import React from 'react';
import {Gif} from "../Gif/Gif";
import {MasonryContainer} from "./GifList.styled";

const GifList = ({ gifs }) => {
  return (
    <MasonryContainer>
      { gifs.map(gif => <Gif key={gif.id} gif={gif} />) }
    </MasonryContainer>
  )
};

export default GifList;

