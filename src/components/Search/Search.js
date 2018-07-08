import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
// actions
import { searchGif } from "./../../actions";

import UI from './Search.ui';

class Search extends Component {

  handleChange = (e) => {
    e.preventDefault();
    this.props.searchGif('hola');
  }

  render() {
    return(
      <UI
        handleChange={this.handleChange}
      />
    );
  };
};

const mapStateToProps = (state) => {
  return {
    result: state.searchResult,
  }
}

Search.propTypes = {
  searchGif: PropTypes.func,
};

Search.defaultProps = {
  searchGif: () => {},
}
  

export default connect(mapStateToProps, {searchGif})(Search);