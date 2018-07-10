import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const Nav = styled.ul`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  height: 60px;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #222;
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  font-weight: 300;
`;

export const NavLi = styled.li`
  position: relative;
  float: left;
  line-height: 60px;
  background: inherit;
  text-align: center;
  transition: all 0.2s;

  :before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    background: #222;
    border-radius: 50%;
    transform: rotate(45deg);
    transition: all 0, background 0.2s;
  }

  :hover:before {
    margin-top: 1px;
    border-radius: 50% 50% 0 50%;
    transition: all 0.1s, background 0.2s,
      margin-top 0.2s cubic-bezier(0.5, 30, 0.2, 0);
  }

  :hover,
  :hover:before {
    background: #3a3a3a;
  }
`;

export const ReactRouterNavLink = styled(RouterLink)`
  position: relative;
  display: block;
  padding: 0 20px;
  line-height: inherit;
  color: white;
  text-decoration: none;
`;
