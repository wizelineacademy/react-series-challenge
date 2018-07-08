import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
// actions
import { searchGif, addFavorites, getFavorites } from "./../../actions";

import UI from './Search.ui';

class Search extends Component {
  constructor(...props){
    super(...props);
    this.state = {
      searchForm: {
        searchField: '',
      },
    };
  }

  componentDidMount() {
    const favoritesList = JSON.parse(localStorage.getItem('favorites'));
    if(favoritesList && favoritesList.length) {
      for(let i = 0, len = favoritesList.length; i < len; i += 1){
        this.props.getFavorites(favoritesList[i]);
      }
    }
  }

  handleChange = (e, data) => {
    const keys = data.split('.');
    const searchForm = this.state;
    searchForm[keys[0]][keys[1]] = e.target.value;
    this.setState(searchForm);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchGif(this.state.searchForm.searchField)
  }

  favorites = (e, obj) => {
    e.preventDefault();
    this.props.addFavorites(obj);
  }

  render() {

    return(
      <UI
        handleChange={this.handleChange}
        inrernalData={this.state.searchForm}
        handleSubmit={this.handleSubmit}
        data={this.props.data}
        favorites={this.favorites}
        favoritesList={this.props.favorites}
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
  searchGif: PropTypes.func,
  addFavorites: PropTypes.func,
  getFavorites: PropTypes.func,
};

Search.defaultProps = {
  searchGif: () => {},
  addFavorites: () => {},
  getFavorites: () => {},
}
  

export default connect(mapStateToProps, {
  searchGif,
  addFavorites,
  getFavorites
})(Search);