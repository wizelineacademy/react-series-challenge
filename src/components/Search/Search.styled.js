import styled from "styled-components";

const SearchBarStyled = styled.input`
  width: 50%;
  padding: 6px;
  border: 1px solid;
  width: 400px;
  text-align: center;
  border-radius: 4px;
  font-size: 1.1em;
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:focus,
  &:active {
    outline: none;
  }
`;

const SearchFormStyled = styled.form``;

export { SearchFormStyled, SearchBarStyled };
