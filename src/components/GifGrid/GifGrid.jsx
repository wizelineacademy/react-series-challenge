import React from 'react';

import Gif from '../Gif';

const GifGrid = ({ gifs, filterText }) => (
  Object.keys(gifs)
    .map(key => gifs[key])
    .filter(gif => gif.title.indexOf(filterText) !== -1)
    .map(gif => <Gif object={gif} key={gif.id} />)
);

export default GifGrid;
