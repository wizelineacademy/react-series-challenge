import styled from "styled-components";

const TileWrapperStyled = styled.div`
  width: ${props => props.width || 300}px;
  height: ${props => props.height || 300}px;
  position: relative;
  margin: 5px;
  transition: 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const FavoriteMarkStyled = styled.label`
  z-index: 1;
  position: absolute;
  right: 14px;
  top: 8px;
  font-size: 1.5em;
  color: ${props => (props.marked ? "red" : "white")};
  opacity: ${props => (props.marked ? 1 : 0.4)};
  transition: 0.1s ease-in;
  user-select: none;

  &:hover {
    color: "red";
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;

export { TileWrapperStyled, FavoriteMarkStyled };
