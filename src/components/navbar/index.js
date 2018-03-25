import React from 'react';
import NavbarStyled from './NavbarStyled';
import NavItemStyled from './NavItemStyled';
import LinkStyled from './LinkStyled'

const NavBar = (props) => {
  return (
    <NavbarStyled>
      <NavItemStyled>
        <LinkStyled to='/'>
          Home
        </LinkStyled>
      </NavItemStyled>
      <NavItemStyled>
        <LinkStyled to='/favorites'>
          Favorites
        </LinkStyled>
      </NavItemStyled>
    </NavbarStyled>
  )
};

export default NavBar;