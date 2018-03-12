import styled from 'styled-components'

export const PaginationButton = styled.span`
  color: black;
  background-color: white;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
  cursor: pointer;
  margin-top: 30px;
  ${ props => props.active && 
    `background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
    cursor: default;
    `
  }
`