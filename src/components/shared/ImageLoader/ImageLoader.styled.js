import styled from "styled-components";

const ImageTagStyled = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 2px;
  object-fit: cover;
`;

export { ImageTagStyled };
