import React from 'react';
import styled from 'styled-components';

const NAVIGATION = styled.ul`
    list-style: none;
    margin: 0;
    background: #ff9800;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: flex-end;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    @media (max-width: 800px) {
      justify-content: space-around;
    }
`;

const Menu = (props) => {
  const { children } = props;
  return (
    <NAVIGATION>
      {children}
    </NAVIGATION>
  );
};

export default Menu;
