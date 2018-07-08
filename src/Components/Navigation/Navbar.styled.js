import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarStyled = styled.div`
  padding: 5px 32px;
  display: flex;
  align-items: center;
  background: rgba(16, 144, 177, 1);
`;

const LogoContainer = styled.div`
  height: 55px;
  width: 150px;
  background: rgba(34, 194, 235, 0.5);
  margin-right: 32px;
`;

const NavLinkStyled = styled(NavLink)``;

export { NavbarStyled, LogoContainer };
