import React, { Component } from 'react'
import {
  GifItemWrapper,
  StyledButton
} from '../GifList/GifList.style'
import { withRouter } from "react-router-dom";

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
         <StyledButton onClick={() => this.props.history.push(`gif/${gif.id}`)}>
           GO
         </StyledButton>

        <img alt={gif.title} src={gif.images.fixed_width_downsampled.url} />
      </GifItemWrapper>
    )
  }
}

export default withRouter(GifItem)
