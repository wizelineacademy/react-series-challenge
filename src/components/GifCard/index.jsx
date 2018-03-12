import React from 'react';
import PropTypes from 'prop-types'
import {Btn, BtnsWrapper, GifCardWrapper} from "./GifCard.style";
import eyeIcon from './eye.png';
import heartBorder from './heart-border.svg';
import heartFilled from './heart-filled.svg';

const GifCard = ({url, isFavorite}) => {
  const heartIcon = isFavorite ? heartFilled : heartBorder;
  return (
    <GifCardWrapper>
      <img alt={'gif'} src={url} />
      <BtnsWrapper>
        <Btn alt={'open'} src={eyeIcon} />
        <Btn alt={'favorite'} src={heartIcon} />
      </BtnsWrapper>
    </GifCardWrapper>
  )
};

GifCard.propTypes = {
  url: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired
};

export default GifCard
