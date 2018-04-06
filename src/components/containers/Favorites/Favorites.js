import React, { Component } from 'react';
import { FavoritesContainer } from './Favorites.styled';
import { InputSearch, ErrorWatcher } from '../../presentational';
import { connect } from 'react-redux';
class Favorites extends Component {
  componentDidMount () {
    
  }

  render() {
    return (
      <FavoritesContainer>
        <InputSearch placeholder='Search images in my favorites ...' />
        Favorites
        <ErrorWatcher visible={false}>{'favoritesGifs.error'}</ErrorWatcher>
      </FavoritesContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const {favoritesGifs} = state;

  return {
    favoritesGifs
  };
};

export default connect(mapStateToProps, { /*getfavoritesGifsRequested*/ })(Favorites);
