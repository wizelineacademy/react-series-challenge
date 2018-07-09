import React from 'react';

import GifCard from './GifCard';

import '../styles/GifGrid.css';


const GifGrid = (props) => {
  const { gifs } = props;

  return (
    <div className="GifGrid mt">
      { gifs.map((gif) =>
        <GifCard key={gif.id} {...gif} />
      )}
      { gifs.length === 0 &&
        <p>Search for something</p>
      }
    </div>
  );
};

export default GifGrid;
