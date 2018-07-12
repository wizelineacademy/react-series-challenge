import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Nav from '../Nav'
import SearchBar from '../SearchBar'
import Gifs from '../Gifs'
import * as actionTypes from '../../actions'

class Favorites extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      loading: false,
      title: 'Favorites',
    }
  }

  componentDidMount() {
    this.props.onFavoriteGifsInit()
  }


  updateQuery(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSearch = () => {
    const { query } = this.state
    const { onFetchData } = this.props

    onFetchData(query)

    const newTitle = !!query ? query : 'Trending Now'

    this.setState({
      title: newTitle
    })
  }

  render() {
    const { query, loading, title } = this.state
    const { favoriteGifs } = this.props
    return (
      <Fragment>
        <Nav />
        <SearchBar
          value={query}
          updateQuery={(e) => this.updateQuery(e)}
          handleSearch={this.handleSearch}
        />
        {
          loading
            ? 'Cargando ...'
            : <Gifs
                gifs={favoriteGifs}
                title={title}
              />
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    favoriteGifs: state.gifs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFavoriteGifsInit: () => dispatch(actionTypes.favoriteGifsInit()),
    onFetchData: (query) => dispatch(actionTypes.fetchDataRequest(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)