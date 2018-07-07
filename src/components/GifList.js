import React from 'react';
import Gif from './Gif'

const GifList = (props) => {
  return (
    <React.Fragment>
      {props.gifs.map((gif, index) =>
        <Gif key={index} liked={gif.liked} src={gif.src} />
      )}
    </React.Fragment>
  );
}

export default GifList;
