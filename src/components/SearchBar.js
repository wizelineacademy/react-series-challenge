import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { SearchBarInput } from '../styles/SearchBar.style.js';

import gifActions from '../actions/gifActions';

class SearchBar extends Component {
  render() {
    const { searchGifs } = this.props;
    const self = this;

    return (
      <div>
        <SearchBarInput
          type="text"
          placeholder="Search gifs!!"
          innerRef={ node => { this.input = node } }
          onKeyPress={ event => {
            if(event.key === 'Enter' && self.input.value.trim()) {
              searchGifs(self.input.value);
            }
          }}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const { searchGifs } = gifActions.creators;

  return bindActionCreators({ searchGifs }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
