import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

// actions
import { deleteFavorites, getFavorites, filterFavorites } from './../../actions'

// UI
import UI from "./Favorites.ui";

class Favorites extends Component {
  constructor(...props){
    super(...props);
    this.state = {
      searchForm: {
        searchField: '',
      },
    };
  }

  componentDidMount() {
      this.props.getFavorites();
  }

  handleChange = (e, data) => {
    const keys = data.split('.');
    const searchForm = this.state;
    searchForm[keys[0]][keys[1]] = e.target.value;
    this.setState(searchForm);
  }

  handleClick = (id) =>{
    this.props.deleteFavorites(id);
  }

  gitFilter = (e) => {
    e.preventDefault();
    this.props.filterFavorites({param: this.state.searchForm.searchField, favorites: this.props.favorites});
  }

  render() {
    return(
      <UI
          favoritesList={this.props.favorites}
          handleClick={this.handleClick}
          gitFilter={this.gitFilter}
          handleChange={this.handleChange}
          inrernalData={this.state.searchForm}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.gif,
    favorites: state.favorites,
  }
}
  
Favorites.propTypes = {
  deleteFavorites: PropTypes.func,
  getFavorites: PropTypes.func,
  filterFavorites: PropTypes.func,
};

Favorites.defaultProps = {
  deleteFavorites: () => {},
  getFavorites: () => {},
  filterFavorites: () => {},
}
 
export default connect(mapStateToProps, {
  deleteFavorites,
  getFavorites,
  filterFavorites,
})(Favorites);


