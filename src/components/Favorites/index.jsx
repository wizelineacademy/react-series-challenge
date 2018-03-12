import React, { Component } from 'react'
import {
  TrendingWrapper,
  StyledTitle,
  GifList,
} from '../Trending/Trending.style'
import GifItem from '../GifItem'

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
        <StyledTitle>Favorite Gifs</StyledTitle>
        {this.renderFavoritesIfExist()}
      </TrendingWrapper>
    )
  }
}

export default Favorites
