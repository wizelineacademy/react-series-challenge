import React from 'react'
import { arrayOf, func, object } from 'prop-types'

import { GridWrapper } from './Grid.style'
import Card from '../Card'

const Grid = ({ giphies, onFavoriteClick }) => (
  <GridWrapper>
    {giphies.map(giph => <Card {...giph} key={giph.id} onFavoriteClick={onFavoriteClick} />)}
  </GridWrapper>
)

Grid.propTypes = {
  giphies: arrayOf(object),
  onFavoriteClick: func
}
export default Grid
