import React from 'react'
import { arrayOf, func, object, string } from 'prop-types'

import { Header, SearchBar, Grid } from '../'

class Home extends React.Component {
  componentDidMount() {
    this.props.initialSetup()
  }

  render() {
    const {
      giphies,
      keywordFilter,
      onFavoriteClick,
      onSearchChange,
      onSearchSubmit,
      searchValue,
    } = this.props

    return (
      <div>
        <Header>
          <SearchBar
            value={searchValue}
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}
            />
        </Header>
        <Grid
          giphies={giphies.filter(giph => giph.title.includes(keywordFilter))}
          onFavoriteClick={onFavoriteClick}
          />
      </div>
    )
  }
}

Home.propTypes = {
  giphies: arrayOf(object),
  initialSetup: func,
  keywordFilter: string,
  onSearchChange: func.isRequired,
  onSearchSubmit: func.isRequired,
  searchValue: string
}
Home.defaultProps = {
  giphies: [],
  initialSetup: () => {},
  keywordFilter: '',
  searchValue: ''
}
export default Home
