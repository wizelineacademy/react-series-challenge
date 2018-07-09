import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../icons/logo.svg';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="App-container">
        <div className="Header-container">
          <NavLink to="/">
            <img src={logo} className="Header-logo" alt="logo" />
          </NavLink>

          <div className="Header-nav-items">
            <NavLink to="/favorites">Favorites</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
