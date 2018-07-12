import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  SearchBarForm,
  SearchBarInput,
  SearchBarButton,
} from './SearchBar.styled';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
  }

  onSearchSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  }

  onSearchTermChange(e) {
    const val = e.target.value;
    this.setState(prevState => ({ searchTerm: val }));
  }

  render() {
    return (
      <SearchBarForm id="search-form" onSubmit={this.onSearchSubmit}>
        <SearchBarInput
          type="text"
          value={this.searchTerm}
          onChange={this.onSearchTermChange}
        />
        <SearchBarButton type="submit">Buscar</SearchBarButton>
      </SearchBarForm>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
