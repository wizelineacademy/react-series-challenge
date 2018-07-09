import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

// actions
import { addFavorites, getFavorites, searchGif } from "./../../actions";

// UI
import UI from './SearchResult.ui';

class SearchResult extends Component {
    componentDidMount() {
        this.props.getFavorites();
      }

    favorites = (e, obj) => {
    e.preventDefault();
    this.props.addFavorites(obj);
  }

  render() {

    return(
        <UI
            data={this.props.result}
            favorites={this.favorites}
            favoritesList={this.props.favorites}
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
  getFavorites: PropTypes.func,
  searchGif: PropTypes.func,
};

SearchResult.defaultProps = {
  addFavorites: () => {},
  getFavorites: () => {},
  searchGif: () => {},
}
  

export default connect(mapStateToProps, {
  addFavorites,
  getFavorites,
  searchGif,
})(SearchResult);