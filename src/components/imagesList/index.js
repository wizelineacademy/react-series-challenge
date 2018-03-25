import React from 'react';
import ListStyled from './ListStyled';
import ListItemStyled from './ListItemStyled'

const ImagesList = ({ images }) => {
  const items = images.map((image) => (<ListItemStyled><img src={image.url} alt={`hi`} /></ListItemStyled>));
  return (
    <ListStyled>
      {items}
    </ListStyled>
  )
}

export default ImagesList;