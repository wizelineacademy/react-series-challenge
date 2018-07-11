import React from "react";
import { NavLink } from "react-router-dom";

import './navegation.css';

const Navegation = () => (
  <header>
    <ul>
      <li><NavLink to="/home" activeclass="active">HOME</NavLink></li>
      <li><NavLink to="/keeps" activeclass="active">Favoritos</NavLink></li>
    </ul>
  </header>
);

export default Navegation;