import React from 'react';
import { SearchBar as StyledSearchBar } from './SearchBar.style'

const SearchBar = (props) => {
  return (
    <StyledSearchBar>
      <input placeholder={(props.placeholder) ? props.placeholder : 'Buscar...'} onChange={props.onChange} />
    </StyledSearchBar>
  );
}

export default SearchBar;
