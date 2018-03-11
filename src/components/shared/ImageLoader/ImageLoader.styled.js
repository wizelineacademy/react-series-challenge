import styled from "styled-components";

const ImageTagStyled = styled.img`
  width: ${props => props.size || 300}px;
  height: ${props => props.size || 300}px;
  border-radius: 2px;
  object-fit: cover;
`;

export { ImageTagStyled };
