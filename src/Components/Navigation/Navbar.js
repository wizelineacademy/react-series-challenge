import React from "react";
// import { NavLink } from "react-router-dom";
import {
  NavbarStyled,
  LogoContainer,
  NavStyled,
  NavLinkStyled
} from "./Navbar.styled";

const Navbar = () => (
  <NavbarStyled>
    <LogoContainer />
    <NavStyled>
      <NavLinkStyled exact to="/">
        Tendencias
      </NavLinkStyled>
      <NavLinkStyled to="/favorites">Favoritos</NavLinkStyled>
    </NavStyled>
  </NavbarStyled>
);

export default Navbar;
