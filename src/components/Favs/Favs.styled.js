import styled from "styled-components";

const EmptyFavsContainerStyled = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const EmptyFavsImgStyled = styled.img`
  border-radius: 3px;
`;

const EmptyFavsMessageStyled = styled.p`
  & > a {
    text-decoration: none;
  }
`;

export { EmptyFavsContainerStyled, EmptyFavsImgStyled, EmptyFavsMessageStyled };
