import React, { Component } from 'react'
import {
  GifWrapper,
  GifDetailWrapper,
  StyledP,
  BackButton
} from './GifDetail.style'
import { withRouter } from "react-router-dom";
import FavoriteButton from '../FavoriteButton'

class GifDetail extends Component {
  componentWillMount() {
    this.props.searchGif(this.props.match.params.id)
  }

  renderGifIfExist() {
    const { gif, isFavorite, setFavorite} = this.props
    if(this.props.gif.title) {
      return(
        <GifDetailWrapper>
          <FavoriteButton gif={gif} isFavorite={isFavorite} setFavorite={setFavorite} />
          <img alt={gif.title} src={gif.images.downsized_large.url} />
          <StyledP>{gif.title}</StyledP>
        </GifDetailWrapper>
      )
    } else {
      return (
        <div>
          This gif does not exist
        </div>
      )
    }
  }

  render() {
    return(
      <GifWrapper>
        <BackButton onClick={() => this.props.history.goBack()}>Back</BackButton>
        {this.renderGifIfExist()}
      </GifWrapper>
    )
  }
}

export default withRouter(GifDetail)
