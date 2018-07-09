import React from "react";
import { withRouter } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Navbar = ({ location }) => (
  <div>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favoritos</NavLink>
    </div>
    <SearchBar from={location.pathname}/>
  </div>
);

export default withRouter(Navbar);
