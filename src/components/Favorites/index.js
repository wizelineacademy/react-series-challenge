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
      trendingGifs: [],
      query: '',
      search: '',
      loading: false,
      title: '',
    }
  }

  componentDidMount() {
    this.props.onFavoriteGifsInit()
  }

  fetchTrending() {
    this.setState({
      loading: true
    })

    axios.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=mjA6Ro3NCh6Q8yWu2qyxlIksx3ACBbAJ&limit=25&rating=G`
    )
    .then(response => {
      const gifs = response.data.data
      console.log(response.data.data)
      this.setState({
        trendingGifs: gifs,
        search: 'search',
        loading: false,
        title: 'Trending Now'
      })
    })
  }


  updateQuery(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSearch = () => {
    const { query } = this.state

    this.setState({
      loading: true
    })

    if (!query) {
      this.fetchTrending()
    } else {
      axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=mjA6Ro3NCh6Q8yWu2qyxlIksx3ACBbAJ&q=${query}&limit=25&offset=0&rating=G&lang=en`
      )
        .then(response => {
          const gifs = response.data.data
          console.log(response.data.data)

          this.setState({
            trendingGifs: gifs,
            search: 'chicken',
            loading: false,
            title: query
          })
        })
    }
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