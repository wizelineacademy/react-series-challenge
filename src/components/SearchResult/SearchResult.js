import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

// actions
import { addFavorites, getFavorites, searchGif, deleteFavorites } from "./../../actions";

// UI
import UI from './SearchResult.ui';

class SearchResult extends Component {
  favorites = (e, obj) => {
    e.preventDefault();
    this.props.addFavorites(obj);
  }

  handleClick = (id) => {
    this.props.deleteFavorites(id);
  }

  render() {
    return (
      <UI
        data={this.props.result}
        favorites={this.favorites}
        favoritesList={this.props.favorites}
        handleClick={this.handleClick}
      />
    );
  };
};

const mapStateToProps = (state) => {
  return {
    result: state.searchGif,
    favorites: state.favorites,
  }
}

SearchResult.propTypes = {
  addFavorites: PropTypes.func,
  deleteFavorites: PropTypes.func,
  getFavorites: PropTypes.func,
  searchGif: PropTypes.func,
};

SearchResult.defaultProps = {
  addFavorites: () => { },
  deleteFavorites: () => { },
  getFavorites: () => { },
  searchGif: () => { },
}


export default connect(mapStateToProps, {
  addFavorites,
  deleteFavorites,
  getFavorites,
  searchGif,
})(SearchResult);