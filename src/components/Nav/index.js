import React from 'react';
import './Nav.css';

const Nav = () => (
  <nav className="Nav">
    <div className="NavContainer">
      <a href="#" className="Logo">GiphySearch</a>
      <ul className="NavList">
        <li className="NavListItem">
          <a href="" className="NavListLink">Favorites</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;