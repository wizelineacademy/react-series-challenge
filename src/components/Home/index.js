import React, { Component, Fragment } from 'react'
import Nav from '../Nav'
import SearchBar from '../SearchBar'
import Gifs from '../Gifs'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trendingGifs: [
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/l397148CJG6CVgoMM/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/l397148CJG6CVgoMM/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        },
        {
          gifImage: "https://media.giphy.com/media/3o85xuZs2EDXdulprW/giphy.gif"
        }
      ]
    }
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