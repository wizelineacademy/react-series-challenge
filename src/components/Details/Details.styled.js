import styled from "styled-components";

const DetailsWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TextStyled = styled.p`
  text-align: ${props => props.align || "left"};
  margin: 0 0 0.4em;
`;

const TextDetailsWrapperStyled = styled.div`
  margin-top: 1em;
  text-align: center
`;

export { DetailsWrapperStyled, TextStyled, TextDetailsWrapperStyled };
