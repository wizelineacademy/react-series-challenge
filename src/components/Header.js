import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }
  handleSearch = (e) => {
    console.log(e.target.value)
  }
  render() {
    return (
      <header className="App-header">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <SearchBar value={this.searchValue} onChange={this.handleSearch} />
      </header>
    )  
  }
}

export default Header;
