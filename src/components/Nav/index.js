import React from 'react';
import { NavLink } from 'react-router-dom'
import './Nav.css';

const Nav = () => (
  <nav className="Nav">
    <div className="NavContainer">
      <NavLink to="/">GiphySearch</NavLink>
      <ul className="NavList">
        <li className="NavListItem">
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;