import React from "react";
import { withRouter, NavLink } from "react-router-dom";

import Search from "../Search";
import {
  NavigationWrapperStyled,
  LinkWrapperStyled
} from "./Navigation.styled";

const Navigation = () => (
  <NavigationWrapperStyled>
    <LinkWrapperStyled>
      <NavLink to="/" exact={true} activeClassName="selected">
        home
      </NavLink>
      <NavLink to="/favs" exact={true} activeClassName="selected">
        favs
      </NavLink>
    </LinkWrapperStyled>
    <Search />
  </NavigationWrapperStyled>
);

export default withRouter(Navigation);
