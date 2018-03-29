import React from 'react';
import ListStyled from './ListStyled';
import ListItemStyled from './ListItemStyled';
import ImageStyled from './ImageStyled';
import { Link } from 'react-router-dom';

const ImagesList = (props) => {
  const { list, buttonClick } = props
  const items = list.map((image) => {
    return (
      <ListItemStyled key={image.id}>
        <Link to={`/image/${image.id}`}>
          <ImageStyled
            src={image.images.original.url}
            alt={`hi`}
          />
        </Link>
        <button onClick={buttonClick.bind(this,{ image })}>Add to Favorites</button>
        {image.favorite ? 'soy favorito!' : null}
      </ListItemStyled>
    );
  });
  return (
    <ListStyled>
      {items}
    </ListStyled>
  )
}

export default ImagesList;