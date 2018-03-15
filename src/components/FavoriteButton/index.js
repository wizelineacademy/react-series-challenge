import React from 'react'
import {
  Favorite
} from './FavoriteButton.style'
import like from '../assets/liked.svg'
import noLike from '../assets/noLike.svg'

const FavoriteButton = ({ isFavorite, gif, setFavorite}) => {
  return (
    <Favorite
      alt="favorite"
      className='favorite'
      src={ (isFavorite) ? like : noLike }
      onClick={() => setFavorite(gif)}
      isFavorite={isFavorite}
/>
  )
}

export default FavoriteButton
