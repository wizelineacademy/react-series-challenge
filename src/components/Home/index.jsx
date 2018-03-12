import React from 'react'
import { arrayOf, func, object, string } from 'prop-types'

import { Header, SearchBar, Grid } from '../'

class Home extends React.Component {
  componentDidMount() {
    this.props.initialSetup()
  }

  render() {
    const { giphies, onSearchChange, onSearchSubmit, searchValue } = this.props

    return (
      <div>
        <Header>
          <SearchBar value={searchValue} onChange={onSearchChange} onSubmit={onSearchSubmit} />
        </Header>
        <Grid giphies={giphies} />
      </div>
    )
  }
}

Home.propTypes = {
  giphies: arrayOf(object),
  initialSetup: func,
  onSearchChange: func.isRequired,
  onSearchSubmit: func.isRequired,
  searchValue: string
}
Home.defaultProps = {
  giphies: [],
  initialSetup: () => {},
  searchValue: ''
}
export default Home
