import React from "react";
import { Menu } from "../../../components";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #000000;
  position: relative;
  img {
    width: 200px;
  }
`;

const Header = props => {
  return (
    <StyledHeader>
      <div>
        <img src="/images/logo.png" alt="Giphy" />
        <Menu />
      </div>
    </StyledHeader>
  );
};

export default Header;
