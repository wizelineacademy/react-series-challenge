import styled from 'styled-components';

import loupe from '../icons/loupe.svg';

export const SearchBarInput = styled.input`
  background: url('${ loupe }') no-repeat right 0.3em center;
  background-size: 1.8em;
  box-sizing: border-box;
  font-size: 1.2em;
  outline-style: none;
  padding: 0.5em;
  padding-right: 2.6em;
  width: 100%;

  &:focus {
    border-color: rgb(61, 180, 255);
  }
`
