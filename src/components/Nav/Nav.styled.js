import styled from 'styled-components'

const NavBar = styled.nav`
  width: 100%;
`

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 1040px;
`

const NavListItem = styled.li`
  padding: 20px 10px;
`

export {
  NavBar,
  NavContainer,
  NavListItem
}
