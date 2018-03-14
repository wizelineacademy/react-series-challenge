import React from 'react';
import { connect } from 'react-redux';
import GifGallery from './GifGallery';
import { getFavorites } from '../selectors/favorites';

const Favorites = ({ favorites }) => {
  const keys = Object.keys(favorites);
  const gifs = keys.map(key => favorites[key]);

  if (gifs.length < 1) {
    return <div>No favorites have been selected so far 😿</div>;
  }

  return (
    <div>
      <GifGallery gifs={gifs} />
    </div>
  );
}

const mapStateToProps = state => ({
  favorites: getFavorites(state)
});

export default connect(mapStateToProps)(Favorites);
