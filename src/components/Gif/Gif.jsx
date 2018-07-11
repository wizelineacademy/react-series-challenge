import React from 'react';
import PropTypes from 'prop-types';

const Gif = ({ object, addFavorite, removeFavorite }) => (
  <div>
    <h3>{object.title}</h3>
    <iframe src={object.embed_url} title={object.title} width="100%" height="100%" />
    {
      object.isFavorite ?
        (
          <button onClick={() => removeFavorite({ payload: { gif: object } })}>
            Remove from favorite
          </button>
        ) :
        (
          <button onClick={() => addFavorite({ payload: { gif: object } })}>
            Add to favorite
          </button>
        )
    }
  </div>
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

