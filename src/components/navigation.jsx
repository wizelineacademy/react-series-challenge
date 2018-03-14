import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.div`
  padding-top: 10px;
  font-family: Verdana;

  a {
    color: white;
    opacity: 0.5;
    text-decoration: none;
  }
  a:hover { opacity: 1; }
`;

const WebName = styled.span`
  color: white;
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;

`;

const Menu = styled.ul`
  padding-left: 20px;
  display: inline-block;
`;

const MenuItem = styled.li`
  color: white;
  display: inline-block;
  padding: 0px 5px;
  float: left;
`;

export default () => (
  <Navigation>
    <WebName><Link to="/">ALPHY</Link></WebName>
    <Menu>
      <MenuItem><Link to="/favorites">Favorites</Link></MenuItem>
    </Menu>
  </Navigation>
);
