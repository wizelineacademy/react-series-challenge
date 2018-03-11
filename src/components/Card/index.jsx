import React from 'react'

const Card = ({ images, title }) => (
  <div>
    <img src={images.fixed_height_downsampled.url} alt={title} />
  </div>
)

export default Card
