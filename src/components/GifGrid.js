import React, { Component } from 'react'
import GifTile from './GifTile'

class GifGrid extends Component {
  render () {
    return (
      <div>
        {
          this.props.gifs.map(gif => (
            <GifTile key={gif.id} data={gif} />
          ))
        }
      </div>
    )
  }
}

export default GifGrid
