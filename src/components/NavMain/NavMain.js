import React  from 'react';
import { NavMainstyled, NavLinkStyled } from './NavMain.styled'

const NavMain = (props) => (
    <NavMainstyled>
        <NavLinkStyled exact to="/" activeClassName="active">Top Gifs</NavLinkStyled>
        <NavLinkStyled exact to="/your-favorites" activeClassName="active">Your Favorites</NavLinkStyled>
    </NavMainstyled>
);

export default NavMain;