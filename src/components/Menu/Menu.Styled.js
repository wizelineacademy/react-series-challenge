import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-evenly;
  width: 60%;
  margin: auto;
`

export const NavLink = styled(Link)`
  flex: 0 0 auto;
  display: inline-block;
  line-height: 18px;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  color: currentColor;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &.${(props) => props.activeClassName} {
    transform: scale(0.95);
    color: #fff;
  }
`