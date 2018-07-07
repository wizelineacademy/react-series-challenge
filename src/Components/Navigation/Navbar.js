import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <div />
    <nav>
      <NavLink to="/">Trending Gifs</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
    <div>
      <i className="fas fa-search" />
      <input type="text" placeholder="Search gifs..." />
    </div>
  </div>
);

export default Navbar;
