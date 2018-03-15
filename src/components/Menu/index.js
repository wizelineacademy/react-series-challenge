import React from 'react'
import {
  MenuWrapper,
  MenuOption
} from './Menu.style'

const Menu = (props) => {
  const { location } = props
  const fav = location.split('/')[1];
  return(
    <MenuWrapper>
      <MenuOption href="/" isActive={fav !== 'favorites'}>Home</MenuOption>
      <MenuOption href="/favorites" isActive={fav === 'favorites'}>Favorites</MenuOption>
    </MenuWrapper>
  )
}

export default Menu
