import React, { Component } from 'react'
import {
  TrendingWrapper,
  GifList,
} from '../Trending/Trending.style'
import GifItem from '../GifItem'
import Menu from '../Menu'

class Favorites extends Component {

  renderFavoritesIfExist() {
  if(Array.isArray(this.props.favoriteGifs)){
    return(
      <GifList>
        {this.props.favoriteGifs.map(gif => {
          return(
            <GifItem
              key={gif.id}
              gif={gif}
              setFavorite={this.props.setFavorite}
              isFavorite={true}
            />
          )
        })}
      </GifList>
    )
  } else {
    return (
      <div>Go favorite something!</div>
    )
  }
}
  render() {
    return(
      <TrendingWrapper>
        <Menu />
        {this.renderFavoritesIfExist()}
      </TrendingWrapper>
    )
  }
}

export default Favorites
