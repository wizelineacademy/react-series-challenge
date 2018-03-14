import React from 'react';
import Star from './styles';

const Favorite = ({onToggleFavorite, starred}) => {
  return (
    <Star
      starred
      onClick={onToggleFavorite}
    />
  )
}

export default Favorite;
