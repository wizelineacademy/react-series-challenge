import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
  font-size: 1.2em;
  border: none;
  border-bottom: 1px solid #ccc;
`;

const SearchBar = (props) => {
  return (
    <SearchInput
      type="search"
      placeholder="Start to type for searching..."
      onChange={props.searchFunction}
     />
  );
}

export default SearchBar;