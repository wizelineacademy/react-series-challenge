import React from 'react';
import { connect } from 'react-redux';
import GifGallery from './GifGallery';
import { getFilteredFavorites } from '../selectors/favorites';

const Favorites = ({ favorites, anyFavorite }) => {
  if (!anyFavorite) {
    return <div>No favorites have been selected so far 😿</div>;
  }

  if (favorites.length < 1) {
    return <div>No favorites matches the search 🔍</div>;
  }

  return (
    <div>
      <GifGallery gifs={favorites} />
    </div>
  );
}

const mapStateToProps = state => ({
  ...getFilteredFavorites(state)
});

export default connect(mapStateToProps)(Favorites);
