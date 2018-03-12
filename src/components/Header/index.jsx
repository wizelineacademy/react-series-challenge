import React from 'react'
import { node } from 'prop-types'

import {
  ChildrenWrapper,
  NavWrapper,
  Option,
  OptionsWrapper,
  StyledH1,
  StyledLink,
  Title,
} from './Header.style'
import { paths } from '../../utils'

const Header = ({ children }) => (
  <div>
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
      <Title>
        <StyledH1>React - Giphy</StyledH1>
      </Title>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
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
