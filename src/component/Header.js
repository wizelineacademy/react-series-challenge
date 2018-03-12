import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
`
const Li = styled.li`
  display: inline;
  padding: 0 10px;
  border-right: 1px solid black;
  &:last-child {
    border-right: 0;
  }
`

class Header extends Component {
  render (){
    return (
      <Nav>
        <ul>
          <Li>
            <Link to="/">Home</Link>
          </Li>
          <Li>
            <Link to="/favorites">Favorites</Link>
          </Li>
        </ul>
      </Nav>
    )
  }
}

export default Header
