import React from 'react'
import Icon from 'react-icons-kit'
import { heart } from 'react-icons-kit/icomoon/heart'
import { Link } from 'react-router-dom'

import { paths } from '../../utils'
import { StyledImg, LoveItem, GifWrapper } from './GifItem.style'

const GifItem = ({ imageUrl, alt, isFavorite, onFavoriteClick, id, isDetail }) => (
  <GifWrapper>
    {
      isDetail &&
      <StyledImg src={imageUrl} alt={alt} />
    }
    {
      !isDetail &&
      <Link to={`${paths.DETAIL}/${id}`}>
        <StyledImg src={imageUrl} alt={alt} />
      </Link>
    }
    <LoveItem isFavorited={isFavorite} isDetail={isDetail}>
      <Icon icon={heart} size={26} onClick={onFavoriteClick} />
    </LoveItem>
  </GifWrapper>
)

export default GifItem
