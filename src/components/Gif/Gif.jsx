import React from 'react';
import PropTypes from 'prop-types';

import {
  GifContainer,
  GifTitle,
  GifImage,
  GifLikeContainer,
} from './Gif.style';

import likeContainer from './favorite-heart-like-container.png';
import likeSelected from './favorite-heart-like-selected.png';

const Gif = ({ object, addFavorite, removeFavorite }) => (
  <GifContainer>
    <GifTitle>{object.title}</GifTitle>
    <GifImage src={object.embed_url} title={object.title} />
    {
      object.isFavorite ?
        (
          <GifLikeContainer
            src={likeSelected}
            alt="Remove from favorite"
            onClick={() => removeFavorite({ payload: { gif: object } })}
          />
        ) :
        (
          <GifLikeContainer
            src={likeContainer}
            alt="Add to favorite"
            onClick={() => addFavorite({ payload: { gif: object } })}
          />
        )
    }
  </GifContainer>
);

Gif.propTypes = {
  object: PropTypes.shape({
    embed_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default Gif;

