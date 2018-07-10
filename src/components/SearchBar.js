import React from 'react';
import { connect } from 'react-redux'

import { SearchBarInput } from '../styles/SearchBar.style.js';

import gifActions from '../actions/gifActions';

const SearchBar = ({ dispatch }) => {
  let input;

  return (
    <div>
      <SearchBarInput
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
