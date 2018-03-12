import React, { Component } from 'react'
import {
  GifWrapper,
  GifStyledList
} from './GifList.style'
import GifItem from '../GifItem'
import Menu from '../Menu'
import SearchBar from '../SearchBar'

class GifList extends Component {

  componentWillMount() {
    if (this.props.requestGifs){
      this.props.requestGifs()
    }
  }

  checkIfFavorite(id) {
    const fav = this.props.favoriteGifs.find(gif => gif.id === id)
    return (fav) ? true : false
  }

  renderGifsIfExist() {
    if(Array.isArray(this.props.gifs)){
      return(
        <GifStyledList>
          {this.props.gifs.map(gif => {
            const isFavorite = this.checkIfFavorite(gif.id)
            return(
              <GifItem
                key={gif.id}
                gif={gif}
                setFavorite={this.props.setFavorite}
                isFavorite={isFavorite}
              />
            )
          })}
        </GifStyledList>
      )
    }
  }
  render() {
    return(
      <GifWrapper>
        <SearchBar />
        <Menu location={this.props.location.pathname} />
        {this.renderGifsIfExist()}
      </GifWrapper>
    )
  }
}

export default GifList
