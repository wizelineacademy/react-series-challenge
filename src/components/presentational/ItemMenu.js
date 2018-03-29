import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const LI = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  
  @media (max-width: 600px) {
    &:last-of-type a {
      border-bottom: none;
    }
  }

  & a.active {
    background: tomato;
    color: white;
  }
`;

const ROUTER = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
  &:hover {
    background: #EF9800;
    outline-width: 0;
  }

  &:active {
    outline-width: 0;
  }

  @media (max-width: 600px) {
    text-align: center;
    padding: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const ItemMenu = (props) => {
  const { children, isIndex, ...extraProps } = props;
  return (
    <LI>
      <ROUTER {...extraProps} activeClassName='active'>
        {children}
      </ROUTER>
    </LI>
  );
};


// a:active, a:hover {
//   outline-width: 0;
// }

export default ItemMenu;