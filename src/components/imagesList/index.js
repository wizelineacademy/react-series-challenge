import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListStyled from './ListStyled';
import ListItemStyled from './ListItemStyled';
import ImageStyled from './ImageStyled';
import actions from '../../actions'

const ImagesList = (props) => {
  const { list, buttonClick } = props
  const items = list.map((image) => {
    return (
      <ListItemStyled key={image.id}>
        <ImageStyled
          src={image.images.original.url}
          alt={`hi`}
        />
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