import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderNavItems
} from '../styles/Header.style.js';

import logo from '../icons/logo.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="App-container">
        <HeaderContainer>
          <NavLink to="/">
            <HeaderLogo src={logo} alt="logo" />
          </NavLink>

          <HeaderNavItems>
            <NavLink to="/favorites">Favorites</NavLink>
          </HeaderNavItems>
        </HeaderContainer>
      </div>
    </HeaderWrapper>
  )
}

export default Header;
