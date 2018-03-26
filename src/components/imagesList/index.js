import React from 'react';
import ListStyled from './ListStyled';
import ListItemStyled from './ListItemStyled'
import ImageStyled from './ImageStyled'

const ImagesList = ({ list }) => {
  const items = list.map((image) => {
  return (
    <ListItemStyled key={image.id}>
      <ImageStyled
        src={image.images.original.url}
        alt={`hi`}
      />
    </ListItemStyled>
  )});
  return (
    <ListStyled>
      {items}
    </ListStyled>
  )
}

export default ImagesList;