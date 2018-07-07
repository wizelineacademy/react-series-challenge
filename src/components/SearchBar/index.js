import React from 'react';
import './SearchBar.css'
import { format } from 'util';

const SearchBar = () => (
  <div className="SearchBar">
    <form className="SearchBarForm">
      <input type="text" placeholder="Search Gifs"/>
    </form>
    <a>Search</a>
  </div>
);

export default SearchBar;