import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GifSection = styled.div`
  text-align: center;
  background-color: DarkSlateGray;
  padding-left: 20px;
  padding-right: 20px;
`

export const StyledHeader = styled.div`
  text-align: center;
  background-color: Crimson;
  padding: 5px;
  margin: 0px;
`

export const StyledDiv = styled.div`
  text-align: center;
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
  text-align: center;
  color: white;
  padding: 10px;
  margin: -10px;
`