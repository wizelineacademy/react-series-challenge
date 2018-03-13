import React, { Component } from 'react'
import {
  GifItemWrapper,
  StyledButton
} from '../GifList/GifList.style'

class GifItem extends Component {
  render() {
    const { gif, isFavorite } = this.props
    return(
      <GifItemWrapper key={gif.id}>
        <StyledButton
           onClick={() => this.props.setFavorite(gif)}
           isFavorite={isFavorite}
        >
           LIKE
         </StyledButton>
        <img alt={gif.title} src={gif.images.fixed_width_downsampled.url} />
      </GifItemWrapper>
    )
  }
}

export default GifItem
