import React from 'react'

import { Title, NavWrapper, OptionWrapper, StyledLink } from './Header.style'
import { paths } from '../../utils'

const Header = () => (
  <div>
    <Title>
      <h1>React - Giphy</h1>
    </Title>
    <NavWrapper>
      <OptionWrapper>
        <StyledLink to={paths.HOME}>
          Search
        </StyledLink>
      </OptionWrapper>
      <OptionWrapper>
        <StyledLink to={paths.FAVORITES}>
          Favorites
        </StyledLink>
      </OptionWrapper>
    </NavWrapper>
  </div>
)

export default Header
