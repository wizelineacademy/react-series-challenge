import React from "react";
import { NavLink } from "react-router-dom";

import Search from "../Search";
import {
  NavigationWrapperStyled,
  LinkWrapperStyled
} from "./Navigation.styled";

const Navigation = () => (
  <NavigationWrapperStyled>
    <LinkWrapperStyled>
      <NavLink to="/">home</NavLink>
      <NavLink to="/favs">favs</NavLink>
    </LinkWrapperStyled>
    <Search />
  </NavigationWrapperStyled>
);

export default Navigation;
