import React from "react";
import { NavLink } from "react-router-dom";

import Search from "../Search";
import { WrapperStyled } from "./Navigation.styled";

const Navigation = () => (
  <WrapperStyled>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/favs">Favorite</NavLink>
    <Search />
  </WrapperStyled>
);

export default Navigation;
