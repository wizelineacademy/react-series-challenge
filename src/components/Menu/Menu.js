import React from 'react';
import { Link } from 'react-router-dom';
import SVG from "../SVG";
import { MenuButton } from "./Menu.styled"

class Menu extends React.Component {
  
  render() {
    return (
      <MenuButton>
        <b>+</b>
        <Link to="/favorites" className="favorite">{SVG.HeartFill}</Link>
        <Link to="/" className="trending">{SVG.Fire}</Link>
      </MenuButton>
    );
  }
};


export default Menu;
