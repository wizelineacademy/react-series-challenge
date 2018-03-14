import React from 'react';
import { connect } from 'react-redux';
import GifGallery from './GifGallery';
import { getFilteredFavorites } from '../selectors/favorites';

const Favorites = ({ favorites }) => {
  if (favorites.length < 1) {
    return <div>No favorites have been selected so far 😿</div>;
  }

  return (
    <div>
      <GifGallery gifs={favorites} />
    </div>
  );
}

const mapStateToProps = state => ({
  favorites: getFilteredFavorites(state)
});

export default connect(mapStateToProps)(Favorites);
