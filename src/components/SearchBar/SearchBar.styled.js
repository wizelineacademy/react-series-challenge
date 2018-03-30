import styled from 'styled-components';

function sharedCss() {
  return `
    font-size: 20px;
    padding: 5px;
    border-radius: 10px;
  `;
}

export const SearchInput = styled.input`
  ${sharedCss()};
  width: 70%;
`;

export const SearchButton = styled.button`
  ${sharedCss()};
  width: 20%;
  border: 0;
  background-color: #EEE;
  cursor:pointer;
`;