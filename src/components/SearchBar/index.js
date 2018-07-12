import React from 'react';
import {
  SearchBarWrapper,
  SearchBarButton,
  SearchBarInput,
  SearchBarForm
} from './SearchBar.styled'

const SearchBar = (props) => (
  <SearchBarWrapper className="SearchBar">
    <SearchBarForm>
      <SearchBarInput
        type="text"
        placeholder="Search Gifs"
        value={props.value}
        onChange={props.updateQuery}
      />
    </SearchBarForm>
    <SearchBarButton
      onClick={props.handleSearch}
    >
      Search
    </SearchBarButton>
  </SearchBarWrapper>
);

export default SearchBar;