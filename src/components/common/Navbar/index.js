import React from 'react'
import NavbarStyled from './NavbarStyled'
import Link from '../Link'



const Navbar = (props)=>{
    return(
        <NavbarStyled>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
        </NavbarStyled>
    )
}

export default Navbar