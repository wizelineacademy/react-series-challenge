import React from 'react';
import './SearchBar.css'
import { format } from 'util';

const SearchBar = (props) => (
  <div className="SearchBar">
    <form className="SearchBarForm">
      <input
        type="text"
        placeholder="Search Gifs"
        value={props.value}
        onChange={props.updateQuery}
      />
    </form>
    <a onClick={props.handleSearch}>Search</a>
  </div>
);

export default SearchBar;