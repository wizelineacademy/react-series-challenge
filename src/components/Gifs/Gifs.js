import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

// actions
import { addFavorites, getFavorites, deleteFavorites } from "./../../actions";

// UI
import UI from './Gifs.ui';

class Search extends Component {
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
        data={this.props.data}
        favorites={this.favorites}
        favoritesList={this.props.favorites}
        handleClick={this.handleClick}
      />
    );
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.gif,
    favorites: state.favorites,
  }
}

Search.propTypes = {
  addFavorites: PropTypes.func,
  deleteFavorites: PropTypes.func,
  getFavorites: PropTypes.func,
};

Search.defaultProps = {
  addFavorites: () => { },
  deleteFavorites: () => { },
  getFavorites: () => { },
}


export default connect(mapStateToProps, {
  addFavorites,
  deleteFavorites,
  getFavorites
})(Search);