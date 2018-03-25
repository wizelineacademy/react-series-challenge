import React from 'react';
import { connect } from 'react-redux';

const SearchBar = (props) => {
  const {
    searchString,
    handleChange
  } = props
  return (
    <input type='text' onChange={handleChange} value={searchString} />
  )
}

const mapStateToProps = (state) => {
  const { searchString } = state;

  return { searchString };
}

export default connect(mapStateToProps)(SearchBar);