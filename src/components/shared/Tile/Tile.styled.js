import styled from "styled-components";

const TileWrapperStyled = styled.div`
  width: ${props => props.width || 300}px;
  height: ${props => props.height || 300}px;
  position: relative;
  margin: 5px;
`;

export { TileWrapperStyled };
