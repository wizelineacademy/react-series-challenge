import React from 'react'
import {
  MenuWrapper,
  MenuOption
} from './Menu.style'

const Menu = () => {
  return(
    <MenuWrapper>
      <MenuOption href="/">Home</MenuOption>
      <MenuOption href="/favorites">Favorites</MenuOption>
    </MenuWrapper>
  )
}

export default Menu
