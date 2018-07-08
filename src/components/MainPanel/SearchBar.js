import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import actions from "../../actions";
import { connect } from "react-redux";

const { searchGifs } = actions.creators;

const SearchBar = ({ searchGifs }) => (
  <input 
    onChange={(e) => searchGifs(e.target.value)} 
    type='text' 
    placeholder='Search' 
  />
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({ searchGifs }, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchBar);