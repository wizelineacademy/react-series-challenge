import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </header>
    )  
  }
}

export default Header;
