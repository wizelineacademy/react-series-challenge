import React from 'react'
import { arrayOf, object } from 'prop-types'

import { GridWrapper } from './Grid.style'
import Card from '../Card'

const Grid = ({ giphies }) => (
  <GridWrapper>
    {giphies.map(giph => <Card {...giph} key={giph.id} />)}
  </GridWrapper>
)

Grid.propTypes = {
  giphies: arrayOf(object)
}
Grid.defaultProps = {
  giphies: []
}
export default Grid
