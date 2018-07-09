import React from 'react';

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
      <img src={ images.original.url } alt={title} />
    </div>
  );
};

export default GifCard;
