import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SearchBox, Container } from './style';

class SearchBar extends Component {
  constructor() {
    super()
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  getSearchValue() {
    // One should be able to use React State for this things :(
    const value = document.getElementById('search-bar').value;
    return {
      searchTerm: value,
      page: 0
    };
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.handleSubmit(this.getSearchValue());
      this.props.history.push('/search');
    }
  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <SearchBox>
          <input type="search" id="search-bar" onKeyUp={this.handleKeyUp} />
          <span />
        </SearchBox>
      </Container>
    );
  }
} 

export default SearchBar;
