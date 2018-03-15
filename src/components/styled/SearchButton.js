import styled from 'styled-components'

const SearchButton = styled.button`
  font-family: 'Font Awesome 5 Free';
  font-size: 20px;
  padding: 8px;
  border: none;
  background-color: transparent;
  outline: none;

  :before {
    content: '\f002';
  }
`

export default SearchButton;
