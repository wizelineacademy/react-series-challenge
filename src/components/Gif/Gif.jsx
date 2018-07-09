import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import favoriteGifsActions from '../../actions/favoriteGifs';

const Gif = ({ object, addFavorite, removeFavorite }) => (
  <div>
    <h3>{object.title}</h3>
    <iframe src={object.embed_url} title={object.title} width="100%" height="100%" />
    <button onClick={() => addFavorite({ payload: { gif: object } })}>
      Add to favorite
    </button>
    <button onClick={() => removeFavorite({ payload: { gif: object } })}>
      Remove from favorite
    </button>
  </div>
);

Gif.propTypes = {
  object: PropTypes.shape({
    embed_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  const { addFavorite, removeFavorite } = favoriteGifsActions.creators;
  return bindActionCreators({
    addFavorite,
    removeFavorite,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Gif);

