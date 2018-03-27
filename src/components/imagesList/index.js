import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListStyled from './ListStyled';
import ListItemStyled from './ListItemStyled';
import ImageStyled from './ImageStyled';
import actions from '../../actions'

const ImagesList = (props) => {
  const { list, addRemoveFavorites } = props
  const items = list.map((image) => {
  return (
    <ListItemStyled key={image.id}>
      <ImageStyled
        src={image.images.original.url}
        alt={`hi`}
      />
      <button onClick={addRemoveFavorites.bind(this,{ image })}>Add to Favorites</button>
    </ListItemStyled>
  )});
  return (
    <ListStyled>
      {items}
    </ListStyled>
  )
}

const mapDispatchToProps = (dispatch) => {
  const { addRemoveFavorites } = actions;
  return bindActionCreators({ addRemoveFavorites }, dispatch);
}

export default connect(null, mapDispatchToProps)(ImagesList);