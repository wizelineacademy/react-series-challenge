import React from 'react';
import StyledBody from './styles';

const Body = ({ children }) => {
  return (
    <StyledBody>
      { children }
    </StyledBody>
  );
};

export default Body;
