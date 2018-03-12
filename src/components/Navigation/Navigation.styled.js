import styled from "styled-components";

const NavigationWrapperStyled = styled.div`
  margin: 0 auto;
  margin: 1em 0 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkWrapperStyled = styled.div`
  margin-bottom: 1em;

  & > a {
    text-decoration: none;
    color: black;
  }

  & > a:first-child {
    margin-right: 20px;
  }
`;

export { NavigationWrapperStyled, LinkWrapperStyled };
