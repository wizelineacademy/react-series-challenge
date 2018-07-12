import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Nav from '../Nav'
import SearchBar from '../SearchBar'
import Gifs from '../Gifs'
import axios from 'axios'
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

  render() {
    const { trendingGifs, query, loading, title } = this.state
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
                // addFavorites={this.handleAddFavorites}
                addFavorites={this.props.onToggleFavorite}
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
    onToggleFavorite: (item) => dispatch(actionTypes.favoriteToggleStart(item)),
    onFavoriteGifsInit: () => dispatch(actionTypes.favoriteGifsInit()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)