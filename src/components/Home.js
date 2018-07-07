import React, { Component } from 'react';
import GifList from './GifList'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: [
        {
          src: "https://media.giphy.com/media/l1J9KqKcpnG6ychfq/giphy.gif",
          liked: true
        },
        {
          src: "https://media.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif",
          liked: false
        },
        {
          src: "https://media.giphy.com/media/3xz2BuKH7jQnxBTCtG/giphy.gif",
          liked: true
        },
      ]
    }
  }
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <GifList gifs={this.state.gifs} />
      </div>
    )  
  }
}

export default Home;
