import React from 'react';

import '../styles/GifCard.css';

const GifCard = (props) => {
  var { user, images } = props;

  return (
    <div className="GifCard">
      <a href={ user.profile_url } className="GifCardUser">
        <img src={ user.avatar_url } />
      </a>
      <img src={ images.original.url } />
    </div>
  );
};

export default GifCard;
