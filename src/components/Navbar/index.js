import React from 'react';
import { Nav, ReactRouterNavLink, NavLi } from './index.style';

const Navbar = () => (
  <Nav>
    <NavLi>
      <ReactRouterNavLink to="/">Home</ReactRouterNavLink>
    </NavLi>
    <NavLi>
      <ReactRouterNavLink to="/favorites">Favorites</ReactRouterNavLink>
    </NavLi>
  </Nav>
);

export default Navbar;
