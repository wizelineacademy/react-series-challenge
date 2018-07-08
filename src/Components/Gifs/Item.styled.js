import styled from "styled-components";

const ItemStyled = styled.span`
  position: relative;
`;

const ItemButtonStyled = styled.button`
  position: absolute;
  bottom: 8px;
  font-size: 24px;
  cursor: pointer;
  color: ${props => (!props.isFavorite ? "#fff" : "#90b110")}
  right: 8px;
  transition: all 0.4s;

  &:hover {
    color: #90b110;
  }
`;

export { ItemStyled, ItemButtonStyled };
