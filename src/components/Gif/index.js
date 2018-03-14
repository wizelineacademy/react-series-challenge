import React from 'react';
import { Link } from 'react-router-dom';
import Favorite from '../Favorite';
import StyledGif from './styles';

const Gif = ({
  gif,
  onClickImage,
  onToggleFavorite,
  starred,
}) => {
  return (
    <StyledGif>
        <div className="container">
          <Favorite
            starred={starred}
            onToggleFavorite={() => onToggleFavorite(gif) }
          />
          <Link
            to={`/view/${gif.id}`}
          >
            <img
              alt="gif"
              onClick={() => onClickImage(gif) }
              src={gif.images.original.url}
            />
          </Link>
        </div>
    </StyledGif>
  )
}

export default Gif;
