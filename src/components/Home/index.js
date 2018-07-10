import React, { Component, Fragment } from 'react'
import Nav from '../Nav'
import SearchBar from '../SearchBar'
import Gifs from '../Gifs'

import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trendingGifs: [],
      query: '',
      search: '',
      loading: false,
      title: ''
    }
  }

  componentDidMount() {
    this.fetchTrending()
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
    // Get favorite Gifs from localStorage
    const favoriteGifs = JSON.parse(localStorage.getItem('favoriteGifs'))

    // Check if there are favorite gifs
    // If exist favorite gifs assign into updateFavoriteGifs
    // If not assign to the variable an empty array
    const updateFavoriteGifs  = !!favoriteGifs ? [...favoriteGifs] : []

    // Check if gif already exist and get the index
    const gifFavoriteExist = updateFavoriteGifs.findIndex(gif => gif.id == newFavoriteGif.id)

    console.log(gifFavoriteExist)

    if (gifFavoriteExist > -1) {
      updateFavoriteGifs.splice(gifFavoriteExist, 1)
    } else {
      updateFavoriteGifs.push(newFavoriteGif)
    }

    localStorage.setItem('favoriteGifs', JSON.stringify(updateFavoriteGifs))
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

    if(!query) {
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
    return(
      <Fragment>
        <Nav />
        <SearchBar
          value={query}
          updateQuery={ (e) => this.updateQuery(e) }
          handleSearch={this.handleSearch}
        />
        {
          loading
            ? 'Cargando ...'
            : <Gifs gifs={trendingGifs} title={title} addFavorites={this.handleAddFavorites}/>
        }
      </Fragment>
    )
  }
}

export default Home