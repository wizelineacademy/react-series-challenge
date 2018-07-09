import React from 'react';

import emptyStar from '../icons/empty-star.svg';
import star from '../icons/star.svg';
import '../styles/GifCard.css';

const GifCard = (props) => {
  var { images, title, user } = props;

  return (
    <div className="GifCard">
      { user &&
        <a href={ user.profile_url } className="GifCardUser">
          <img src={ user.avatar_url } alt={ user.username } />
        </a>
      }
      <img
        src={emptyStar}
        className="GifCardStar"
        alt="favorite icon"
        onClick={(event) => console.log(event) }
      />

      <img src={ images.original.url } className="GifCardMain" alt={title} />
    </div>
  );
};

export default GifCard;
