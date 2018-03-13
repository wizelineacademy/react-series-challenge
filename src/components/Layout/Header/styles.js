import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: black;
  color: white;

  & img.logo {
    width: 80px;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

export default StyledHeader;
