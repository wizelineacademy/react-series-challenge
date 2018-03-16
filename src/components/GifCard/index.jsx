import React from 'react';
import PropTypes from 'prop-types';
import {Btn, BtnsWrapper, GifCardWrapper} from "./GifCard.style";
import eyeIcon from './assets/eye.png';
import heartBorder from './assets/heart-border.svg';
import heartFilled from './assets/heart-filled.svg';
import {withRouter} from "react-router-dom";

export const GifCard = ({gif, history, isFavorite, isDetailBtnVisible, imageSize, toggleFavorite}) => {
  const image = imageSize === 'small' ? gif.images.small : gif.images.original;
  const heartIcon = isFavorite ? heartFilled : heartBorder;
  const openDetailView = () => history.push(`/detail/${gif.id}`);
  return (
    <GifCardWrapper>
      <img alt={'gif'} src={image} />
      <BtnsWrapper>
        {
          isDetailBtnVisible ? <Btn alt={'detail'} src={eyeIcon} onClick={openDetailView.bind(this)} /> : null
        }
        <Btn alt={'favorite'} src={heartIcon} onClick={toggleFavorite.bind(this, gif)} />
      </BtnsWrapper>
    </GifCardWrapper>
  )
};

GifCard.propTypes = {
  gif: PropTypes.shape({
    id: PropTypes.string,
    images: PropTypes.shape({
      original: PropTypes.string,
      small: PropTypes.string
    })
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isDetailBtnVisible: PropTypes.bool.isRequired,
  imageSize: PropTypes.oneOf(['small', 'original']).isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default withRouter(GifCard);
