import React from 'react';

import logo from './logo.svg';
import './styles/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} className="Header-logo" alt="logo" />

      <div className="Header-nav-items">
        <a href="#">Favorites</a>
      </div>
    </div>
  )
}

export default Header;
