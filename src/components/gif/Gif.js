import React from 'react';
import { connect } from 'react-redux';
import LikeStatus from 'components/likeStatus';
import { StyledGif } from './Gif.style'

export const bgColor = (number) => {
  let seed = number ? number : Math.random()
  return  `#${(Math.floor(seed*16777215).toString(16))}`;
}

export const Gif = (props) => {
  let likeRender = <LikeStatus liked={false} />;
  if (
    props.favorite &&
    props.favorite[props.id] &&
    Boolean(props.favorite[props.id].liked)
  ) {
    likeRender = <LikeStatus liked={true} />;
  }
  return (
    <StyledGif bgColor={bgColor} src={props.src} onClick={props.onClick}>
      <img
        className="img"
        src={props.src}
        alt={props.title}
        title={props.title}
      />
      { likeRender }
    </StyledGif>
  )
}

const mapStateToProps = (state) => {
  const {
    favorite
  } = state;
  
  return {
    favorite
  };
};

export default connect(mapStateToProps)(Gif);
