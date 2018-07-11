import React from 'react';

const LikeStatus = (props) => {
  return <span className="like-status">
    {(Boolean(props.liked)) ? '💖' : '🖤'}
  </span>
}

export default LikeStatus;
