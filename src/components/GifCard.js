import React from 'react';

const GifCard = (props) => {
  var { url, username } = props;

  return (
    <div className="GifCard">
      <p>{ username }</p>
      <p>{ url }</p>
    </div>
  );
};

export default GifCard;
