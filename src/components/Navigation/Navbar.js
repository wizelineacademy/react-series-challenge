import React from "react";
import { withRouter } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import { ContainerNavbarStyled, NavbarLinkStyle } from "./NavbarStyle";

const Navbar = ({ location }) => (
  // location.pathame
  <ContainerNavbarStyled>
    <div>
      <NavbarLinkStyle exact to="/">Home</NavbarLinkStyle>
      <NavbarLinkStyle to="/favorites">Favoritos</NavbarLinkStyle>
    </div>
    <SearchBar from={location.pathname}/>
  </ContainerNavbarStyled>
);

export default withRouter(Navbar);
