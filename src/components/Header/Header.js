import React from 'react'
import {
  Header,
  Title,
  Navigation,
  StyledLink
} from './Header.styled'

const HeaderComp = () => {

  return(
    <Header>
      <Title>
        Header
      </Title>
      <Navigation>
        <StyledLink to="/">
          HOME
        </StyledLink>
        <StyledLink to="/favorites">
          FAVORITES
        </StyledLink>
      </Navigation>
    </Header>
  )

}

export default HeaderComp
