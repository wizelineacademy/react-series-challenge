import React from 'react';
import styled from 'styled-components';

const NAVIGATION = styled.nav`
    z-index: 100;
    width: 100%;
    position: fixed;
    top: 0px;

    & ul {
      list-style: none;
      margin: 0px;
      background: #ff9800;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-flow: row wrap;
      flex-flow: row wrap;
      justify-content: flex-end;
    }

    @media (max-width: 500px) {
      & ul {
        flex-direction: column;
      }
    }

    @media (max-width: 800px) {
      & ul {
        justify-content: space-around;
      }
    }
`;

const Separator = styled.hr`
    margin: 0px;
`;

const Menu = (props) => {
  const { children } = props;
  return (
    <NAVIGATION>
      <ul>
        {children}
      </ul>
      <Separator />
    </NAVIGATION>
  );
};

export default Menu;
