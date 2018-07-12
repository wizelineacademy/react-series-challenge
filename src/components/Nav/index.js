import React from 'react';
import { NavLink } from 'react-router-dom'
import { NavBar, NavContainer, NavListItem } from './Nav.styled'

const Nav = () => (
  <NavBar >
    <NavContainer >
      <NavLink to="/">GiphySearch</NavLink>
      <ul>
        <NavListItem>
          <NavLink to="/favorites">Favorites</NavLink>
        </NavListItem>
      </ul>
    </NavContainer>
  </NavBar>
);

export default Nav;