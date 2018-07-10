import React from "react";
import { NavLink } from "react-router-dom";

import './navegation.css';

const Navegation = () => (
  <header>
    <ul>
      <li><NavLink to="/" activeClass="active" exact>HOME</NavLink></li>
      <li><NavLink to="/keeps" activeClass="active">Favoritos</NavLink></li>
    </ul>
  </header>
);

export default Navegation;