import React from 'react'
import { arrayOf, func, object, string } from 'prop-types'

import { SearchBar, Grid } from '../'

class Home extends React.Component {
  componentDidMount() {
    this.props.initialSetup()
  }

  render() {
    const { giphies, onSearchChange, searchValue } = this.props

    return (
      <div>
        <SearchBar value={searchValue} onChange={onSearchChange} />
        <Grid giphies={giphies} />
      </div>
    )
  }
}

Home.propTypes = {
  giphies: arrayOf(object),
  initialSetup: func,
  onSearchChange: func.isRequired,
  searchValue: string
}
Home.defaultProps = {
  giphies: [],
  initialSetup: () => {},
  searchValue: ''
}
export default Home
