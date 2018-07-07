import React from "react";
import SearchButton from "../SearchButton/SearchButton";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favoritos</NavLink>
    </div>
    <SearchButton />
  </div>
);

export default Navbar;
