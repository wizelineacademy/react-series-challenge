import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
// actions
import { searchGif } from "./../../actions";

import UI from './Search.ui';

class Search extends Component {

  handleChange = (e) => {
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
  console.log('mapStateToProps:::', state);
  return {
    result: state.searchResult,
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      searchGif
  }, dispatch)
}

Search.propTypes = {
  searchGif: PropTypes.func,
};

Search.defaultProps = {
  searchGif: () => {},
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Search);