import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ContainerNavbarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 10rem;
    align-items: center;
    background-color: #5B79D6;
    width: 100%
    position: fixed;
    z-index: 10
`;

const NavbarLinkStyle = styled(NavLink)`
    color: #3A4E89;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 1rem;

    &.${props => props.activeClassName} {
        color: white
    }
`;

NavbarLinkStyle.defaultProps = {
    activeClassName: "active"
}

export { ContainerNavbarStyled, NavbarLinkStyle };