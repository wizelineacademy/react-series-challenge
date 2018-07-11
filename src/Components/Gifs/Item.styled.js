import styled from "styled-components";

const ItemStyled = styled.div`
  position: relative;
  margin: 8px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  border: solid;
  align-items: center;
`;

const ItemButtonStyled = styled.button`
  position: absolute;
  bottom: 4px;
  font-size: 24px;
  cursor: pointer;
  color: ${props => (!props.isFavorite ? "#1090b1" : "#90b110")}
  right: 8px;
  transition: all 0.4s;

//   &:hover {
//     color: #90b110;
//   }
`;

export { ItemStyled, ItemButtonStyled };
