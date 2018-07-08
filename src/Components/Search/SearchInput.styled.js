import styled from "styled-components";

const SearchStyled = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: center;
`;

const InputStyled = styled.input`
  font-size: 32px;
  color: rgb(252, 254, 255);
  text-align: center;

  &::placeholder {
    color: rgba(16, 144, 177, 0.3);
  }
`;

const ButtonStyled = styled.button`
  font-size: 32px;
  color: rgb(16, 144, 177);
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    color: rgb(144, 177, 16);
  }
`;

export { SearchStyled, InputStyled, ButtonStyled };
