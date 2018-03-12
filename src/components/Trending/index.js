import React, { Component } from 'react'
import {
  TrendingWrapper,
  GifList,
  StyledTitle,
} from './Trending.style'
import GifItem from '../GifItem'

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
        <StyledTitle>Awesome Gif App</StyledTitle>
        {this.renderTrendingIfExist()}
      </TrendingWrapper>
    )
  }
}

export default Trending
