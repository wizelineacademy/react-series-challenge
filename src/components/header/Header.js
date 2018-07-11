import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.style'

const Header = () => {
  return (
    <StyledHeader>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </StyledHeader>
  )  
}

export default Header;
