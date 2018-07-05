import React from "react"; 
import {NavLink} from "react-router-dom";
const Navbar =()=>{
    return(
            <ul>
                <li><NavLink to="/" activeClass="active">Home</NavLink></li>
                <li><NavLink to="/fav" activeClass="active">Favs</NavLink></li>
            </ul>
    );

}
export default Navbar;