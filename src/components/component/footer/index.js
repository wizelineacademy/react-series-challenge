import React from "react";

import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #564343;
  color: white;
  text-align: center;
  box-shadow: 0 -12px 19px -6px #777;
`;

const Footer = () => (
  <StyledFooter className="footer">
    <div>Alfonso Ruiz</div>
  </StyledFooter>
);

export default Footer;