import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <div />
    <div>
      <NavLink to="/">Trending Gifs</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </div>
  </div>
);

export default Navbar;
