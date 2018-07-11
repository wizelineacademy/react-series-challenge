import React from 'react';
import { StyledLikeStatus } from './LikeStatus.style'

const LikeStatus = (props) => {
  return <StyledLikeStatus className="like-status">
    {(Boolean(props.liked)) ? '💖' : '🖤'}
  </StyledLikeStatus>
}

export default LikeStatus;
