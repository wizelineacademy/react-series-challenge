import React, { Component, Fragment } from 'react'
import Nav from '../Nav'
import SearchBar from '../SearchBar'
import Gifs from '../Gifs'

import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trendingGifs: [

      ]
    }
  }

  componentDidMount() {
    axios.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=mjA6Ro3NCh6Q8yWu2qyxlIksx3ACBbAJ&limit=25&rating=G`
    )
    .then(response => {
      const gifs = response.data.data
      console.log(response.data.data)
      this.setState({
        trendingGifs: gifs
      })
    })
  }

  render() {
    return(
      <Fragment>
        <Nav />
        <SearchBar/>
        <Gifs gifs={this.state.trendingGifs}/>
      </Fragment>
    )
  }
}

export default Home