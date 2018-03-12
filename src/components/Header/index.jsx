import React from 'react'
import { node } from 'prop-types'

import { ChildrenWrapper, Title, NavWrapper, Option, OptionsWrapper, StyledLink } from './Header.style'
import { paths } from '../../utils'

const Header = ({ children }) => (
  <div>
    <Title>
      <h1>React - Giphy</h1>
    </Title>
    <NavWrapper>
      <OptionsWrapper>
        <Option>
          <StyledLink to={paths.HOME}>
            Search
          </StyledLink>
        </Option>
        <Option>
          <StyledLink to={paths.FAVORITES}>
            Favorites
          </StyledLink>
        </Option>
      </OptionsWrapper>
      {
        children &&
        <ChildrenWrapper>
          {children}
        </ChildrenWrapper>
      }
    </NavWrapper>
  </div>
)

Header.propTypes = {
  children: node,
}
Header.defaultProps = {
  children: null
}
export default Header
