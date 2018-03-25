import styled from 'styled-components';

const NavItemStyled = styled.li`
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

export default NavItemStyled;