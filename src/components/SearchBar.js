import React from 'react';
import { connect } from 'react-redux'

import '../styles/SearchBar.css';
import gifActions from '../actions/gifActions';

const SearchBar = ({ dispatch }) => {
  let input;

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search gifs!!"
        ref={ node => input = node }
        onKeyPress={ event => {
          if(event.key === 'Enter' && input.value.trim()) {
            dispatch(gifActions.creators.searchGifs(input.value));
          }
        }}
      />
    </div>
  )
}

export default connect()(SearchBar);
