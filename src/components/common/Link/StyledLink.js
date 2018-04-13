
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Theme from '../Theme'

const { text, secondary_text, light_primary } = Theme
const StyledLink = styled(NavLink)`
    color:${text};
    font-weight:bold;
    margin:0.5em;
    padding:0.2em;
    text-decoration:none;
    font-family: 'Montserrat', sans-serif;
    transition:0.5s all;
    &:hover{
        color:${secondary_text};
        background-color:${light_primary};
    }
    

`

export default StyledLink