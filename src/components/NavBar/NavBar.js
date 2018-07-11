import React from 'react';
import { NavLink } from "react-router-dom";
import StyledNavBar, { StyledNavLink } from "../styled/NavBar.styled";

const NavBar = (props) => (
  <StyledNavBar>
    <StyledNavLink
      activeStyle={{fontSize: 21, fontWeight:'bold'}} 
      to='/explore'>
        Explore
    </StyledNavLink> 
    <StyledNavLink 
      activeStyle={{fontSize: 21, fontWeight:'bold'}} 
      to='/favorites'>
        Favorites
    </StyledNavLink> 
  </StyledNavBar>
)

export default NavBar;