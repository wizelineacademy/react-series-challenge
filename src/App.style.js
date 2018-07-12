import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Layout = styled.main`
    display: grid;
    grid-template-areas: "aside main";
    grid-template-columns: 2fr 10fr;
`

export const Main = styled.section`
    grid-area: main;
    padding: 2rem;
`

export const Navigation = styled.nav`
    grid-area: aside
    display: flex;
    padding: 8rem 0;
    flex-direction: column;
`
export const Link = styled(NavLink)`
    color: #B0B0B5;
    margin: 0.25rem 0rem;
    padding: 0.5rem 1rem 0.5rem;
    text-decoration: none;
    text-transform: capitalize;
    transition-property: all;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;

    &.active {
        outline: none;
        border-radius: 0 20px 20px 0;
        background-color: #E8ECFF;
        color: #858ECC;
        font-weight: bold;
    }
`

