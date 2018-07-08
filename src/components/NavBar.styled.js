import styled from 'styled-components';
import searchIcon from '../assets/search.svg'
import { NavLink } from 'react-router-dom';


export const Header = styled.header`
  background-color: #20232a;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const LogoImage = styled.img`
  height: 50px;
  width: 50px;
`;

export const LogoText = styled.span`
  display: inline-block;
  color: #61dafb;
  vertical-align: middle;
  margin-top: -38%;
`;

export const NavLinks = styled.nav`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const NavTab = styled(NavLink)`
  text-align: center;
  line-height: 3.3rem;
  padding-right: 1rem;
  padding-left: 1rem;
  text-decoration: none;
  color: #fff;
`;

export const SearchInput = styled.input`
  width: 100%;
  background-image: url(${searchIcon});
  background-position-y: center;
  background-position-x: 5px;
  background-size: 16px 16px;
  background-repeat: no-repeat;
  padding: 0.5rem 0.5rem 0.5rem 1.8rem;
  background-color: transparent;
  font-size: 16px;
  border: none;
  border-radius: 1rem;
  height: 1.5rem;
  color: #fff;
  &:focus {
    outline: none;
    background-color: rgba(132, 132, 132, 0.2);
  }
`;