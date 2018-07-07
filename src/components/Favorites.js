import React, { Component } from 'react';
import GifList from './GifList'

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: [
        {
          src: "https://media.giphy.com/media/l1J9KqKcpnG6ychfq/giphy.gif",
          liked: true
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
      <div className="favorites">
        <h1>Favorites</h1>
        <GifList gifs={this.state.gifs} />
      </div>
    )  
  }
}

export default Favorites;
