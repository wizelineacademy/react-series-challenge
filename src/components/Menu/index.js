import React from 'react'
import {
  MenuWrapper,
  MenuOption
} from './Menu.style'

const Menu = (props) => {
  const { location } = props
  return(
    <MenuWrapper>
      <MenuOption href="/" isActive={location === '/'}>Home</MenuOption>
      <MenuOption href="/favorites" isActive={location === '/favorites'}>Favorites</MenuOption>
    </MenuWrapper>
  )
}

export default Menu
