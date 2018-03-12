import React from 'react'
import { arrayOf, object } from 'prop-types'

import Card from '../Card'

const Grid = ({ giphies }) => (
  giphies.map(giph => <Card {...giph} key={giph.id} />)
)

Grid.propTypes = {
  giphies: arrayOf(object)
}
export default Grid
