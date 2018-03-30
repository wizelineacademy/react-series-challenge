import styled from 'styled-components';

export const NavbarStyled = styled.ul`
  list-style: none;
  background-color: #151414;
  text-align: left;
  padding: 5px;
  margin: 0;
  font-size:16px;
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
    padding:12px;
  }

  a:hover {
    background-color: #2b2b28;
  }
`
export default {
  NavbarStyled,
  NavItemStyled
}