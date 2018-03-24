import React  from 'react';
import {
    NavLink
} from 'react-router-dom';

const NavMain = (props) => (
    <nav>
        <NavLink to="/" activeClassName="active">Top Gifs</NavLink>
        <NavLink to="/your-favorites" activeClassName="active">Your Favorites</NavLink>
    </nav>
);

export default NavMain;