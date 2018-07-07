import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <div />
    <nav>
      <NavLink to="/">Trending Gifs</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  </div>
);

export default Navbar;
