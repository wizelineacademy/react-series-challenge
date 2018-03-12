import React from 'react'
import { func, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { paths } from '../../utils'

const Card = ({ images, title, onClick, id }) => (
  <div>
    <Link to={`${paths.DETAIL}/${id}`}>
      <img src={images.fixed_height_small.url} alt={title} onClick={onClick} />
    </Link>
  </div>
)

Card.propTypes = {
  images: string.isRequired,
  title: string.isRequired,
  onClick: func,
  onHover: func,
}
Card.defaultProps = {
  onClick: () => {},
  onHover: () => {}
}
export default Card
