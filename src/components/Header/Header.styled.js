import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.div`
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: 50px;
  background-color:green;
`

export const Title = styled.div`
  float:left;
  padding: 8px 0 8px 18px;
`

export const Navigation = styled.div`
  float:right;
  padding: 8px 16px 0 8px;
`

export const StyledLink = styled(Link)`
  padding-left: 8px;
`

