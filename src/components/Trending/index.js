import React, { Component } from 'react'
import {
  TrendingWrapper,
  GifList
} from './Trending.style'
import GifItem from '../GifItem'
import Menu from '../Menu'

class Trending extends Component {

  componentWillMount() {
    this.props.requestTrendingGifs()
  }

  checkIfFavorite(id) {
    const fav = this.props.favoriteGifs.find(gif => gif.id === id)
    return (fav) ? true : false
  }

  renderTrendingIfExist() {
    if(Array.isArray(this.props.trendingGifs)){
      return(
        <GifList>
          {this.props.trendingGifs.map(gif => {
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
        </GifList>
      )
    }
  }
  render() {
    return(
      <TrendingWrapper>
        <Menu location={this.props.location.pathname} />
        {this.renderTrendingIfExist()}
      </TrendingWrapper>
    )
  }
}

export default Trending
