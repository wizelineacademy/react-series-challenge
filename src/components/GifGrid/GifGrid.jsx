import React from 'react';

import Gif from '../Gif';

const GifGrid = ({ gifs, favoriteGifs, filterText }) => (
  Object.keys(gifs)
    .map((key) => {
      const markedGif = {
        ...gifs[key],
        isFavorite: !!favoriteGifs[key],
      };
      return markedGif;
    })
    .filter(gif => gif.title.indexOf(filterText) !== -1)
    .map(gif => <Gif object={gif} key={gif.id} />)
);

export default GifGrid;
