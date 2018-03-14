import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavWrapper = styled.div`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`

export const OptionsWrapper = styled.div`
  display: flex;
`

export const Option = styled.div`
  display: flex;
  font-size: large;
  padding: 5px 30px;

  :hover {
    background-color: #DDD;
    color: black;
  }
`

export const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 70px;
`

export const StyledLink = styled(Link)`
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;

  :hover {
    color: black;
  }
`

export const Title = styled.div`
  color: white;
  padding: 15px;
  text-align: center;
`

export const StyledH1 = styled.h1`
  margin: 0;
`
