import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favoritos</NavLink>
    </div>
    <SearchBar />
  </div>
);

export default Navbar;
