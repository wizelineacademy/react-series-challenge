import React from 'react';
import Gif from './Gif'

const GifList = (props) => {
  return (
    <React.Fragment>
      {Object.keys(props.gifs).map((gif, index) =>
        <Gif key={index} liked={props.gifs[gif].liked} src={props.gifs[gif].images.original.url} />
      )}
    </React.Fragment>
  );
}

export default GifList;
