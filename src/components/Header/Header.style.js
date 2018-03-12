import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavWrapper = styled.div`
  background-color: #333;
  display: flex;
`

export const OptionWrapper = styled.div`
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;

  :hover {
    background-color: #DDD;
    color: black;
  }
`

export const StyledLink = styled(Link)`
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
`

export const Title = styled.div`
  background-color: #F1F1F1;
  color: black;
  padding: 10px;
  text-align: center;
`
