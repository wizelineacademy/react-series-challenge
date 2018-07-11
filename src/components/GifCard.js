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

export const GifCard = (props) => {
  const { favorited, id, images, title, toggleFavorite } = props;

  return (
    <GifCardWrapper>
      <GifCardStar
        src={ favorited ? star : emptyStar }
        alt="favorite icon"
        onClick={ () => toggleFavorite({ id, title, url: images.downsized.url }) }
      />

      <GifCardMainImage src={ images.downsized.url } alt={title} />
    </GifCardWrapper>
  );
};

const mapStateToProps = (state, props) => {
  const { id } = props;
  const { favorites } = state;

  return {
    favorited: !!favorites.find((fav) => fav.id === id)
  };
};

const mapDispatchToProps = (dispatch) => {
  const { toggleFavorite } = favoriteActions.creators;

  return bindActionCreators({ toggleFavorite }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GifCard);
