import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import gifsActions from '../../actions/gifs';
import { List } from '../gif';
import Search from '../search';
import { Favorites as FavoritesStyled } from './Favorites.style';

class Favorites extends Component {
  componentDidMount() {
    this.props.clearQuery();
    this.props.loadFavorites();
  }

  render() {
    return (
      <FavoritesStyled>
        <Search searchAction={this.props.searchFavorites} />
        <List
          gifs={this.props.gifs}
          favorites={this.props.gifs}
          toggleFavorite={this.props.toggleFavorite}
        />
      </FavoritesStyled>
    );
  }
}

const mapStateToProps = state => {
  const gifs = state.data.searchQuery
    ? state.data.favoritesResults
    : state.data.favorites;
  return {
    gifs
  };
};

const mapDispatchToProps = dispatch => {
  const {
    toggleFavorite,
    searchFavorites,
    clearQuery,
    loadFavorites
  } = gifsActions.creators;

  return bindActionCreators(
    {
      searchFavorites,
      toggleFavorite,
      clearQuery,
      loadFavorites
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
