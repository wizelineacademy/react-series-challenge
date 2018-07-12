import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenu = styled.div`
  display: inline-flex;
  padding-left: 20em;
  ul {
    float: left;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  a {
    float: left;
    width: 6em;
    text-decoration: none;
    color: white;
    background-color: purple;
    padding: 0.2em 0.6em;
    border-right: 1px solid white;
  }
  a:hover {
    background-color: #ff3300;
  }
  li {
    display: inline;
  }
`;

const Menu = props => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
