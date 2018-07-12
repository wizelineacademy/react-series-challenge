import React from "react";

import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => (
  <StyledFooter className="footer">
    <div>Just a footer =)</div>
  </StyledFooter>
);

export default Footer;