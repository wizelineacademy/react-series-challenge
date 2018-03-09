import React, { Component } from 'react'
import {
  TrendingWrapper,
  GifList,
  GifItem,
  StyledTitle,
  StyledButton
} from './Trending.style'

class Trending extends Component {

  componentWillMount() {
    this.props.requestTrendingGifs()
  }

  renderTrendingIfExist() {
    if(Array.isArray(this.props.trendingGifs)){
      return(
        <GifList>
          {this.props.trendingGifs.map(gif => {
            return(
              <GifItem>
                <StyledButton>LIKE</StyledButton>
                <img alt={gif.title} key={gif.id} src={gif.images.fixed_width_downsampled.url} />
              </GifItem>

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
