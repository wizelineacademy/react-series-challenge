import React from 'react';
import NavBar from '../navigation-bar';

const Template = ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
);

export default Template;