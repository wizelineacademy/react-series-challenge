import React from 'react';
import { NavLink } from "react-router-dom";
//import SearchBar from './SearchBar';

const NavBar = (props) => (
  <div style={{padding: 10}} className='NavBar'>
    <NavLink style={{padding: 10}} to='/explore'>Explore</NavLink> 
    <NavLink style={{padding: 10}} to='/favorites'>Favorites</NavLink> 
    {/*<SearchBar />*/}
  </div>
)

export default NavBar;