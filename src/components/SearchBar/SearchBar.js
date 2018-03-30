import React from 'react';
import SearchBarStyled from './SearchBarStyled';

const SearchBar = ({placeholder, searchText}) => {
  return(
    <SearchBarStyled type="text" placeholder={placeholder} onKeyUp={searchText}/>
  );
};

export default SearchBar;
