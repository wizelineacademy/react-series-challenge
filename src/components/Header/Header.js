import React from 'react';
import {Menu, MenuItem} from "./Header.styled";
import {NavLink} from "react-router-dom";

const Header = () => (
  <Menu>
    <MenuItem>Giphy Client</MenuItem>
    <MenuItem>
      <NavLink to="/home">Home</NavLink>
    </MenuItem>
    <MenuItem>
      <NavLink to="/favorites">Favorites</NavLink>
    </MenuItem>
  </Menu>
);
export default Header;