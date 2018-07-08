import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarStyled, LogoContainer } from "./Navbar.styled";

const Navbar = () => (
  <NavbarStyled>
    <LogoContainer />
    <nav>
      <NavLink to="/">Trending Gifs</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  </NavbarStyled>
);

export default Navbar;
