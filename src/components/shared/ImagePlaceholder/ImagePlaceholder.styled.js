import styled from "styled-components";

const ColorBoxStyled = styled.div`
  background-color: ${props => props.color};
  height: ${props => props.height}px;
  width: 25vw;
`;

export { ColorBoxStyled };
