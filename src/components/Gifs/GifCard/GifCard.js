import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../../actions'

import {
  GifCardWrapper,
  GifCardItem,
  GifImage,
  GifCardFavorites,
  FavoriteLogo
} from './GifCard.styled'

class GifCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFavorite: false
    }
  }

  componentDidMount() {
    const favoriteGifs = JSON.parse(localStorage.getItem('favoriteGifs'))
    const { gif } = this.props

    const checkIndex = favoriteGifs.findIndex(element => element.id === gif.id)

    if (checkIndex > -1) {
      this.setState({
        isFavorite: true
      })
    }
  }

  handleToogleFavorite= () => {
    const { gif, onToggleFavorite } = this.props

    onToggleFavorite(gif)

    this.setState( prevState => ({
      isFavorite: !prevState.isFavorite
    }));

  }

  render() {
    const { gif } = this.props
    const { isFavorite } = this.state

    return (
      <GifCardWrapper className="GifCard">
        <GifCardItem href="#" className="GifCardItem">
          <GifImage
            className="GifImage"
            src={gif.images.downsized.url}
            alt={gif.title}
          />
        </GifCardItem>
        <GifCardFavorites className="GifCardFavorites">
          <FavoriteLogo
            size="20"
            // onClick={() => onToggleFavorite(gif)}
            onClick={this.handleToogleFavorite}
            isFavorite={isFavorite}
          />
        </GifCardFavorites>
      </GifCardWrapper>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onToggleFavorite: item => dispatch(actionTypes.favoriteToggleStart(item)),
  };
};

export default connect(null, mapDispatchToProps)(GifCard)