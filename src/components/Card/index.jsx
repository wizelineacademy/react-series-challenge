import React from 'react'
import { func, object, string } from 'prop-types'
import { Link } from 'react-router-dom'

import { paths } from '../../utils'
import { CardWrapper, StyledImg } from './Card.style'

const Card = ({ images, title, onClick, id }) => (
  <CardWrapper>
    <Link to={`${paths.DETAIL}/${id}`}>
      <StyledImg src={images.fixed_height_small.url} alt={title} onClick={onClick} />
    </Link>
  </CardWrapper>
)

Card.propTypes = {
  images: object.isRequired,
  title: string.isRequired,
  onClick: func,
  onHover: func,
}
Card.defaultProps = {
  onClick: () => {},
  onHover: () => {}
}
export default Card
