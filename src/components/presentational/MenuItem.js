import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Item = styled(NavLink)`
  color: white;
  margin: 0 0 2px 0;
  padding: 20px 10px;
  cursor: pointer;
  text-transform: capitalize;
  text-decoration: none;
  transition: all 0.5s;
  display: block;
  min-height: 1.5em;
  background-color: #000;
  &:hover {
    background: lightblue;
    color: white;
    opacity: 0.8;
  }
  &.active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: white;
  }
`;

const MenuItem = ({ section }) => (
  <Item to={`/${section.route}`} key={section.route} >
    { section.title }
  </Item>
);

export default MenuItem;
