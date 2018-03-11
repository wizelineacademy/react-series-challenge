import React, { Component } from 'react'
import {
  TrendingWrapper,
  StyledTitle,
  GifList,
  GifItem,
  StyledButton
} from '../Trending/Trending.style'

class Favorites extends Component {

  renderFavoritesIfExist() {
  if(Array.isArray(this.props.favoriteGifs)){
    return(
      <GifList>
        {this.props.favoriteGifs.map(gif => {
          return(
            <GifItem>
              <StyledButton>LIKE</StyledButton>
              <img alt={gif.title} key={gif.id} src={gif.images.fixed_width_downsampled.url} />
            </GifItem>

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
