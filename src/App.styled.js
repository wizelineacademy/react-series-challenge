import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GifSection = styled.div`
  text-align: center;
  background-color: DarkSlateGray;
  padding-left: 0px;
  padding-right: 2px;
  width: 100%;
  height: 100%;
`

export const StyledHeader = styled.div`
  text-align: center;
  background-color: Crimson;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 2px;
  width: 100%;
`

export const StyledDiv = styled.div`
  text-align: center;
  padding: 0px;
  border: 0px;
  margin: -10px;
  width: 100%;
  height: 100%;
  position: absolute;
`
/*
  li {
    display: inline-block;
    margin: 20px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover
  a:active 
  active {
      color: orange;
  }*/


export const StyledUl = styled.ul`
  text-align: center;
`

export const StyledLi = styled.li`
  display: inline-block;
  margin: 20px;
  text-align: center;
  width: 200px;
`

export const StyledNavLink = styled(NavLink)`
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  color: white;
  padding: 10px;
`