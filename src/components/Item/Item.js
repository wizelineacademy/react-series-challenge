import React from 'react'
import favIcon from '../../assets/fav.svg'
import noFavIcon from '../../assets/no-fav.svg'
import {
  Item,
  Favorite,
  Image
} from './Item.styled'

const ItemComp = ({item, onClickFav, isFav, onClick}) => {

  const favImage = isFav ? favIcon : noFavIcon
  return(
    <Item>
      <Favorite src={favImage} id="fav-button" onClick={() => onClickFav(item, isFav)} alt="Favorite"/>
      <Image src={item.images.original.webp} alt={item.title} onClick={() => onClick(item)}/>
    </Item>
  )
}

export default ItemComp
