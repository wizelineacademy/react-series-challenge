import styled from 'styled-components'

const ClearButton = styled.button`
  font-family: 'Font Awesome 5 Free';
  font-size: 20px;
  padding: 8px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  :before {
    content: '\f00d';
  }

  &.hidden {
    display: none;
  }
`

export default ClearButton;
