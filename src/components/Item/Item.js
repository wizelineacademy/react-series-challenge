import React from 'react'
import favIcon from '../../assets/fav.svg'
import noFavIcon from '../../assets/no-fav.svg'
import './item.css'

const Item = ({item, onClickFav, isFav, onClick}) => {

  const favImage = isFav ? favIcon : noFavIcon
  return(
    <div className="contentItem">
      <img src={favImage} className="favButton" onClick={() => onClickFav(item, isFav)} alt="Favorite"/>
      <img src={item.images.original.webp} className="imgContent" alt={item.title} onClick={() => onClick(item)}/>
    </div>
  )
}

export default Item
