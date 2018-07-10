import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import favoriteActions from '../actions/favoriteActions';

import emptyStar from '../icons/empty-star.svg';
import star from '../icons/star.svg';

import {
  GifCardWrapper,
  GifCardStar,
  GifCardMainImage
} from '../styles/GifCard.style.js';

const GifCard = (props) => {
  var { favorite, id, images, title, toggleFavorite } = props;

  return (
    <GifCardWrapper>
      <GifCardStar
        src={ favorite ? star : emptyStar }
        alt="favorite icon"
        onClick={ () => toggleFavorite(id) }
      />

      <GifCardMainImage src={ images.downsized.url } alt={title} />
    </GifCardWrapper>
  );
};

const mapStateToProps = (state, props) => {
  const { id } = props;
  const { favorites } = state;

  return {
    favorite: favorites.indexOf(id) !== -1
  };
};

const mapDispatchToProps = (dispatch) => {
  const { toggleFavorite } = favoriteActions.creators;

  return bindActionCreators({ toggleFavorite }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GifCard);
