import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  background-color: #20232a;
  h1 {
    color: #fff;
    font-size: 30px;
    text-align: center;
    padding: 30px;
  }
`;

const Header = () => (
  <HeaderStyled>
    <h1> Giphy Collection </h1>
  </HeaderStyled>
);

export default Header;
