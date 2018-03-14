import React from 'react';
import { Link } from 'react-router-dom';
import Favorite from './components/Favorite';
import StyledGif from './styles';

const Gif = ({ id, images, onToggleFavorite }) => {
  return (
    <StyledGif>
      <Link
        to={`/view/${id}`}
      >
        <div className="container">
          <Favorite
            onToggleFavorite={onToggleFavorite}
          />
          <img
            alt="gif"
            src={images.original.url}
          />
        </div>
      </Link>
    </StyledGif>
  )
}

export default Gif;
