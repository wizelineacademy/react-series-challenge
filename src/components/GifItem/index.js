import React, { Component } from 'react'
import {
  GifItemWrapper
} from '../GifList/GifList.style'
import { withRouter } from "react-router-dom";
import FavoriteButton from '../FavoriteButton'

class GifItem extends Component {
  render() {
    const { gif, isFavorite, setFavorite } = this.props
    return(
      <GifItemWrapper key={gif.id}>
        <FavoriteButton
          isFavorite={isFavorite}
          gif={gif}
          setFavorite={setFavorite}
        />
        <img
          alt={gif.title}
          src={gif.images.fixed_width_downsampled.url}
          onClick={(event) => this.props.history.push(`gif/${gif.id}`)}
        />
      </GifItemWrapper>
    )
  }
}

export default withRouter(GifItem)
