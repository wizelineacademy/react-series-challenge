import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

import logo from '../logo.svg';

class Navbar extends Component {
  render () {
    return (
      <NavbarStyled>
        <LogoStyled src={logo} alt="logo" />
        <TitleStyled>Gif Viewer</TitleStyled>
        <NavStyled>
          <NavLinkStyled exact to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/favs">Favorites</NavLinkStyled>
        </NavStyled>
      </NavbarStyled>
    )
  }
}

export default Navbar

const NavbarStyled = styled.header`
  height: 72px;
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.5);
`;

const LogoStyled = styled.img`
  margin-top: 10px;
  height: 52px;
  float: left;
`

const TitleStyled = styled.h1`
  float: left;
`
const NavStyled = styled.nav`
  float: right;
  margin-top: 43px;
`

const NavLinkStyled = styled(NavLink)`
  color: #3273dc;
  padding-bottom: calc(0.5rem - 3px);
  cursor: pointer;
  text-decoration: none;
  line-height: 1.5;
  margin-right: 30px;
  &.active {
    border-bottom-color: #3273dc;
    border-bottom-style: solid;
    border-bottom-width: 3px;
  }
`
