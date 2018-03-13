import React from 'react';
import { Link } from 'react-router-dom';
import Favorite from './components/Favorite';
import StyledGif from './styles';

const Gif = () => {
  const src = 'https://media.giphy.com/media/26xBGd4ho9zZptWbC/giphy.gif';

  return (
    <StyledGif>
      <Link
        to={`/view/${123}`}
      >
        <h1>GIF Title</h1>
        <div className="container">
          <Favorite starred />
          <img
            alt="gif"
            src={src}
          />
        </div>
      </Link>
    </StyledGif>
  )
}

export default Gif;
