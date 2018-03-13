import styled from "styled-components";

const EmptyFavsContainerStyled = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const EmptyFavsMessageStyled = styled.p`
  & > a {
    text-decoration: none;
  }
`;

export { EmptyFavsContainerStyled, EmptyFavsMessageStyled };
