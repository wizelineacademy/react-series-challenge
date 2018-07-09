import React, { Component, Fragment } from 'react'
import Nav from '../Nav'
import SearchBar from '../SearchBar'
import Gifs from '../Gifs'

import axios from 'axios'

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
    // this.fetchTrending()
    this.getFavorites()
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

  handleAddFavorites = (newFavoriteGif) => {

    let favoriteGifs = JSON.parse(localStorage.getItem('favoriteGifs'))
    favoriteGifs  = !!favoriteGifs ? favoriteGifs : []

    console.log(favoriteGifs)

    const updateFavoriteGifs = [
      ...favoriteGifs,
      newFavoriteGif
    ]

    localStorage.setItem('favoriteGifs', JSON.stringify(updateFavoriteGifs))
  }

  getFavorites() {
    const favoriteGifs = JSON.parse(localStorage.getItem('favoriteGifs'))

    console.log(favoriteGifs)

    this.setState({
      trendingGifs: favoriteGifs
    })
  }

  updateQuery(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSearch = () => {
    this.setState({
      loading: true
    })

    const { query } = this.state

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
                gifs={trendingGifs}
                title={title}
                addFavorites={this.handleAddFavorites}
              />
        }
      </Fragment>
    )
  }
}

export default Favorites