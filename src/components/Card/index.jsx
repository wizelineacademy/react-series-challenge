import React from 'react'
import { object, string } from 'prop-types'

import { CardWrapper } from './Card.style'
import GifItem from '../../containers/GifItem'

const Card = ({ images, title, id }) => (
  <CardWrapper>
    <GifItem imageUrl={images.fixed_height.url} alt={title} id={id}  />
  </CardWrapper>
)

Card.propTypes = {
  images: object.isRequired,
  title: string.isRequired,
  id: string.isRequired
}
export default Card
