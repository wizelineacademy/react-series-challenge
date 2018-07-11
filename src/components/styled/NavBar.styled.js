import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  
  font-size: 18px;
  color: #8e06ad;
  text-decoration: none;
  padding: 5px;

  :hover {
    text-decoration: underline;
  }

`;

const NavBar = styled.div`
  padding: 15px;
`;

export default NavBar;