import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {FavoriteBtn, HomeWrapper, SearchBtn, SearchInput, SearchWrapper, TrendingGifCards} from './GifGallery.style';
import searchIcon from './assets/search.png';
import favoriteIcon from './assets/heart-filled-white.png'
import homeIcon from './assets/home.png';
import GifCard from "../GifCard";

class GifGallery extends React.Component {
  componentWillMount() {
    if (this.props.dataSource === 'GIPHY') {
      this.props.fetchTrendingGifs();
    }
  }

  render() {
    const dataSource = this.props.dataSource === 'GIPHY' ? this.props.trending: this.props.favorites;
    return (
      <HomeWrapper>
        <SearchWrapper>
          <SearchBtn src={searchIcon} />
          <SearchInput placeholder={'Type to search cool GIFs'} />
          <FavoriteBtn src={homeIcon} onClick={() => this.props.history.push('/')} />
          <FavoriteBtn src={favoriteIcon} onClick={() => this.props.history.push('/favorites')} />
        </SearchWrapper>
        <TrendingGifCards>
          {
            dataSource.map((gif) => {
              const isFavorite = !!this.props.favorites.find((favorite) => favorite.id === gif.id);
              return (
                <GifCard
                  gif={gif}
                  isFavorite={isFavorite}
                  imageSize={'small'}
                  key={gif.id}
                  toggleFavorite={this.props.toggleFavorite}
                 />
              )
            })
          }
        </TrendingGifCards>
      </HomeWrapper>
    );
  }
}

GifGallery.propTypes = {
  dataSource: PropTypes.oneOf(['GIPHY', 'favorites']).isRequired,
  favorites: PropTypes.array.isRequired,
  fetchTrendingGifs: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  trending: PropTypes.array.isRequired
};

export default withRouter(GifGallery);
