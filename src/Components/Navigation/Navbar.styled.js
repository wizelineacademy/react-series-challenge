import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarStyled = styled.div`
  padding: 0 32px;
  display: flex;
  align-items: center;
  background: rgb(16, 144, 177);
  box-shadow: 0px 2px 10px 1px rgba(16, 144, 177, 0.6);
`;

const LogoContainer = styled.div`
  height: 55px;
  width: 150px;
  background: rgba(255, 255, 255, 0.3);
  margin-right: 32px;
`;

const NavStyled = styled.nav`
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  color: #fff;
  font-weight: 200;
  transition: all 0.25s;

  &:hover,
  &.${props => props.activeClassName} {
    color: rgb(16, 144, 177);
    background-color: rgb(144, 177, 16);
  }
`;

NavLinkStyled.defaultProps = {
  activeClassName: "active"
};

export { NavbarStyled, LogoContainer, NavStyled, NavLinkStyled };
