import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import { GIFComponent, Header } from '../../components';

// Connect
import Connect from '../../util/connect';

// Styles
import {
  HomeContainer,
  Content,
  ButtonAddFavorite,
  ButtonRemoveFavorite,
  FavoriteContainer
} from './HomeStyles';

class Home extends Component {
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

  handleFavoriteChange(event) {
    event.preventDefault();
    const { handleFavoriteChangeAction } = this.props;
    handleFavoriteChangeAction(event.target.id);
  }

  componentWillMount() {
    const { appState: { filter }, fetchTrendingGifsAction } = this.props;
    fetchTrendingGifsAction(filter);
  }

  searchFunction(event) {
    const { searchGIFAPIAction } = this.props;
    searchGIFAPIAction(event.target.value);
  }

  render() {
    const { appState: { gifs } } = this.props;
    return (
      <HomeContainer>
        <Header {...this.props} searchFunction={this.searchFunction} />
        <Content>
          {gifs.length > 0 ? (
            gifs.map(gif => (
              <Link to={`/gif/${gif.id}`} key={gif.id}>
                <GIFComponent
                  gifData={{
                    id: gif.id,
                    title: gif.title,
                    width: gif.images.fixed_height_small.width,
                    height: gif.images.fixed_height_small.height,
                    url: gif.images.fixed_height_small.url
                  }}
                />
                <FavoriteContainer>{this.renderHeart(gif.id)}</FavoriteContainer>
              </Link>
            ))
          ) : (
            <div style={{ color: 'white' }}>Loading</div>
          )}
        </Content>
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  appState: PropTypes.object.isRequired,
  fetchTrendingGifsAction: PropTypes.func.isRequired,
  searchGIFAPIAction: PropTypes.func.isRequired,
  handleFavoriteChangeAction: PropTypes.func.isRequired
};

let home = Connect(Home);
export default home;
