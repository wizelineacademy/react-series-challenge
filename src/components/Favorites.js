import React from 'react';
import { connect } from 'react-redux';
import GifGallery from './GifGallery';
import { getFilteredFavorites } from '../selectors/favorites';

export const Favorites = ({ favorites, anyFavorite }) => {
  if (!anyFavorite) {
    return 'No favorites have been selected so far 😿';
  }

  if (favorites.length < 1) {
    return 'No favorites matches the search 🔍';
  }

  return (
    <GifGallery gifs={favorites} />
  );
}

const mapStateToProps = state => ({
  ...getFilteredFavorites(state)
});

export default connect(mapStateToProps)(Favorites);
