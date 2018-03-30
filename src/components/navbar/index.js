import React from 'react';
import { NavbarStyled, NavItemStyled } from '../../styled/NavbarStyled';
// import NavItemStyled from './NavItemStyled';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <NavbarStyled>
      <NavItemStyled>
        <Link to='/'>
          Home
        </Link>
      </NavItemStyled>
      <NavItemStyled>
        <Link to='/favorites'>
          Favorites
        </Link>
      </NavItemStyled>
    </NavbarStyled>
  )
};

export default NavBar;