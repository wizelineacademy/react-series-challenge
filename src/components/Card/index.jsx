import React from 'react'
import { func, object, string } from 'prop-types'

import { CardWrapper } from './Card.style'
import { GifItem } from '../'

const Card = ({ images, title, id }) => (
  <CardWrapper>
    <GifItem imageUrl={images.fixed_height.url} alt={title} isFavorite={false} id={id}  />
  </CardWrapper>
)

Card.propTypes = {
  images: object.isRequired,
  title: string.isRequired
}

export default Card
