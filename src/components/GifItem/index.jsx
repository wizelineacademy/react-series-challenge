import React from 'react'
import Icon from 'react-icons-kit'
import { heart } from 'react-icons-kit/icomoon/heart'
import { Link } from 'react-router-dom'
import { arrayOf, bool, func, string } from 'prop-types'

import { paths } from '../../utils'
import { StyledImg, LoveItem, GifWrapper } from './GifItem.style'

class GifItem extends React.Component {
  constructor(props) {
    super(props)

    this.onFavoriteClickHandler = this.onFavoriteClickHandler.bind(this)
  }

  onFavoriteClickHandler() {
    const { onFavoriteClick, id } = this.props

    return onFavoriteClick(id)
  }
  render() {
    const {
      alt,
      favorites,
      id,
      imageUrl,
      isDetail,
    } = this.props
    const isFavorite = favorites.indexOf(id) > -1

    return (
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
        <LoveItem isFavorite={isFavorite} isDetail={isDetail}>
          <Icon icon={heart} size={26} onClick={this.onFavoriteClickHandler} />
        </LoveItem>
      </GifWrapper>
    )
  }
}

GifItem.propTypes = {
  alt: string.isRequired,
  favorites: arrayOf(string),
  id: string.isRequired,
  imageUrl: string.isRequired,
  isDetail: bool,
  onFavoriteClick: func.isRequired
}
GifItem.defaultProps = {
  favorites: [],
  isDetail: false
}
export default GifItem
