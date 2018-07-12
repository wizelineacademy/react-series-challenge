import React from "react";
import { NavLink } from "react-router-dom";

import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  :hover {
    color: blue;
  }
  &.active{
    color: red;
    font-size: bold;
  }
`;

const Navegation = () => (
  <header>
    <ul>
      <li><StyledNavLink to="/home" activeClassName="active">HOME</StyledNavLink></li>
      <li><StyledNavLink to="/keeps" activeClassName="active">Favoritos</StyledNavLink></li>
    </ul>
  </header>
);

export default Navegation;