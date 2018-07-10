import React from 'react';

import GifCard from './GifCard';
import { GifGridWrapper } from '../styles/GifGrid.style.js';

const GifGrid = (props) => {
  const { gifs } = props;

  return (
    <GifGridWrapper className="mt">
      { gifs.map((gif) =>
        <GifCard key={gif.id} {...gif} />
      )}
      { gifs.length === 0 &&
        <p>Search for something</p>
      }
    </GifGridWrapper>
  );
};

export default GifGrid;
