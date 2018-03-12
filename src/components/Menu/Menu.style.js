import styled from 'styled-components'

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  margin: auto;
  margin-bottom: 20px;
`
export const MenuOption = styled.a`
  color: white;
  font-size: 20px;
  border-bottom: ${props => props.isActive ? 'solid 3px blueviolet' : 'none'};
  text-decoration: none;
  padding: 5px;

  :hover {
    opacity: 0.85;
  }
`
