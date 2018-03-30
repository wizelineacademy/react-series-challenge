import styled from 'styled-components';

export const NavbarStyled = styled.ul`
  list-style: none;
  background-color: #0a094f;
  text-align: center;
  padding: 0;
  margin: 0;
`
export const NavItemStyled = styled.li`
  font-family: sans-serif;
  font-size: 1.5em;
  line-height: 40px;
  height: 40px;
  width: 120px;
  border-bottom: none;
  display: inline-block;
  margin-right: -4px;
  a {
    text-decoration: none;
    color: #fff;
    display: block;
  }

  a:hover {
    background-color: #005f5f
  }
`
export default {
  NavbarStyled,
  NavItemStyled
}