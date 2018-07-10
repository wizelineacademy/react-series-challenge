import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import GifGrid from '../components/GifGrid';
import SearchBar from '../components/SearchBar';

const AppContainer = (props) => {
  const { gifs, favorites } = props;
  const favoriteGifs = gifs.filter((gif) => favorites.indexOf(gif.id) !== -1);

  return (
    <div className="AppContainer mt">
      <SearchBar />

      <Route
        exact
        path="/"
        render={() => (
          <GifGrid gifs={gifs} />
        )}
      />
      <Route
        path="/favorites"
        render={() => (
          <GifGrid gifs={favoriteGifs} />
        )}
      />
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(AppContainer);
