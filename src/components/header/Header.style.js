import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  height: 3em;
  align-items: center;
  justify-content: center;
  a {
    margin: 1em;
    text-decoration: none;
    &.active {
      color: red;
    }
    &:hover {
      color: red;
      border-bottom: 3px solid red;
    }
  }
`
