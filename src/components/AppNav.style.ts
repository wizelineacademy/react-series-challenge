import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
    border-bottom: 1px solid #FC4349;
    margin-bottom: 1em;
    color: #6DBCDB;
    font-weight: bold;

    ul {
        display: flex;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        height: 3.5em;
    }

    li { flex: 1; }

    a {
        text-decoration: none;
        color: inherit;
        padding: 1em;
    }
`;

export const NavLink = styled(RouterNavLink)`
    &.active { color: #FC4349; }
`
