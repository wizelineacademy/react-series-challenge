import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import { GIFComponent, Header } from '../../components';

// Connect
import Connect from '../../util/connect';

// Styles
import {
  GIFViewContainerStyled,
  Content,
  ButtonAddFavorite,
  ButtonRemoveFavorite,
  FavoriteContainer
} from './GIFViewStyles';

class GIFView extends Component {
  constructor() {
    super();
    this.searchFunction = this.searchFunction.bind(this);
    this.handleFavoriteChange = this.handleFavoriteChange.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
  }

  renderHeart(id) {
    const { appState: { favoriteGifs } } = this.props;
    const checkFavorite = favoriteGifs.find(fav => {
      return fav === id;
    });
    if (checkFavorite === undefined) {
      return (
        <ButtonAddFavorite id={id} onClick={this.handleFavoriteChange} color={'white'}>
          Add
        </ButtonAddFavorite>
      );
    } else {
      return (
        <ButtonRemoveFavorite id={id} onClick={this.handleFavoriteChange}>
          Remove
        </ButtonRemoveFavorite>
      );
    }
  }

  getGifData(id) {
    const { appState: { gifs } } = this.props;
    return gifs.find(gif => gif.id === id);
  }

  handleFavoriteChange(event) {
    event.preventDefault();
    const { handleFavoriteChangeAction } = this.props;
    handleFavoriteChangeAction(event.target.id);
  }

  searchFunction(event) {
    const { searchGIFAPIAction } = this.props;
    searchGIFAPIAction(event.target.value);
  }

  render() {
    const { match: { params: { id } } } = this.props;
    let gif = this.getGifData(id);
    return (
      <GIFViewContainerStyled>
        <Header {...this.props} searchFunction={this.searchFunction} />
        <Content>
          <GIFComponent
            gifData={{
              id: gif.id,
              title: gif.title,
              width: gif.images.original.width,
              height: gif.images.original.height,
              url: gif.images.original.url
            }}
          />
          <FavoriteContainer>{this.renderHeart(gif.id)}</FavoriteContainer>
        </Content>
      </GIFViewContainerStyled>
    );
  }
}

GIFView.propTypes = {
  appState: PropTypes.object.isRequired,
  searchGIFAPIAction: PropTypes.func.isRequired,
  handleFavoriteChangeAction: PropTypes.func.isRequired
};

let gIFView = Connect(GIFView);
export default gIFView;
