import React from 'react';
import { NavLink } from 'react-router-dom';

import { ContainerWrapper } from '../styles/ContainerWrapper.style.js';
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
      <ContainerWrapper>
        <HeaderContainer>
          <NavLink to="/">
            <HeaderLogo src={logo} alt="logo" />
          </NavLink>

          <HeaderNavItems>
            <NavLink to="/favorites">Favorites</NavLink>
          </HeaderNavItems>
        </HeaderContainer>
      </ContainerWrapper>
    </HeaderWrapper>
  )
}

export default Header;
