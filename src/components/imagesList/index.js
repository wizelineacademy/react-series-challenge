import React from 'react';
import ListStyled from './ListStyled';
import ListItemStyled from './ListItemStyled'

const ImagesList = ({ list }) => {
  const items = list.map((image) => (<ListItemStyled key={image.id}><img src={image.images.original.url} alt={`hi`} /></ListItemStyled>));
  return (
    <ListStyled>
      {items}
    </ListStyled>
  )
}

export default ImagesList;