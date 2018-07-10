import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

// actions
import { searchGif } from "./../../actions";

import UI from './Search.ui';

class Search extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(...props) {
    super(...props);
    this.state = {
      searchForm: {
        searchField: '',
      },
    };
  }

  handleChange = (e, data) => {
    const keys = data.split('.');
    const searchForm = this.state;
    searchForm[keys[0]][keys[1]] = e.target.value;
    this.setState(searchForm);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.router.history.push(`/search/${this.state.searchForm.searchField}`);
    this.props.searchGif(this.state.searchForm.searchField)
  }


  render() {

    return (
      <UI
        handleChange={this.handleChange}
        inrernalData={this.state.searchForm}
        handleSubmit={this.handleSubmit}
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
  searchGif: () => { },
}


export default connect(mapStateToProps, {
  searchGif,
})(Search);