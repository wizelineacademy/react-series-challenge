import React from "react";
import { NavLink } from "react-router-dom";

import Search from "../Search";
import { NavigationWrapperStyled } from "./Navigation.styled";

const Navigation = () => (
  <NavigationWrapperStyled>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/favs">Favorite</NavLink>
    <Search />
  </NavigationWrapperStyled>
);

export default Navigation;
