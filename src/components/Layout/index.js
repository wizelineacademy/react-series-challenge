import React from 'react';
import Header from './Header';
import Body from './Body';
import StyledLayout from './styles.js';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Body>
        { children }
      </Body>
    </StyledLayout>
  );
};

export default Layout;
