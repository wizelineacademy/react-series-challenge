import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  padding: 10px;
`;

export const HeaderTitle = styled.h1`
  font-family: Ubuntu;
  font-size: 24px;
  text-align: center;
  margin: 4px 0;
`;

export const HeaderNavLink = styled(NavLink)`
  padding: 20px 30px;
  color: ${props => props.theme.primary.foreground};
  border-left: 1px solid #fff;
  background-color: ${props => props.theme.primary.background};

  :hover {
    background-color: ${props => props.theme.secondary.background};
    color: ${props => props.theme.secondary.foreground};
  }
`;

export const HeaderNav = styled.nav`
  background-color: ${props => props.theme.primary.background};
  display: flex;
  justify-content: flex-end;
`;
