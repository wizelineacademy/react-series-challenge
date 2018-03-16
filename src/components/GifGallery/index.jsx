import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {NavigationBtn, HomeWrapper, SearchBtn, SearchInput, SearchWrapper, TrendingGifCards} from './GifGallery.style';
import searchIcon from './assets/search.png';
import favoriteIcon from './assets/heart-filled-white.png'
import homeIcon from './assets/home.png';
import GifCardContainer from "../../containers/GifCard";

class GifGallery extends React.Component {
  componentWillMount() {
    if (this.props.dataSource === 'GIPHY') {
      this.props.fetchTrendingGifs();
    } else {
      this.props.updateFilteredFavorites(this.props.favorites.original);
    }
  }

  handleInputOnChange(event) {
    if (event.target.id === 'toSearch') {
      const toSearch = event.target.value;
        if (!toSearch) {
          this.props.fetchTrendingGifs();
          this.props.updateFilteredFavorites(this.props.favorites.original);
        } else {
          this.props.fetchSearchGifs(toSearch);
          const filteredFavorites = this.props.favorites.original.filter((gif) => {
            return gif.title.search(toSearch.toUpperCase()) !== -1
          });
          this.props.updateFilteredFavorites(filteredFavorites)
        }
    }
  }

  render() {
    const dataSource = this.props.dataSource === 'GIPHY' ? this.props.trending: this.props.favorites.filtered;
    const placeHolder = this.props.dataSource === 'GIPHY' ? 'Type to search cool GIFs on GIPHY' : 'Search inside your favorites';
    return (
      <HomeWrapper>
        <SearchWrapper>
          <SearchBtn src={searchIcon} />
          <SearchInput placeholder={placeHolder} id='toSearch' type='text' onChange={this.handleInputOnChange.bind(this)} />
          <NavigationBtn src={homeIcon} onClick={() => this.props.history.push('/')} />
          <NavigationBtn src={favoriteIcon} onClick={() => this.props.history.push('/favorites')} />
        </SearchWrapper>
        <TrendingGifCards>
          {
            dataSource.map((gif) => {
              const isFavorite = !!this.props.favorites.original.find((favorite) => favorite.id === gif.id);
              return (
                <GifCardContainer
                  gif={gif}
                  isFavorite={isFavorite}
                  isDetailBtnVisible
                  imageSize={'small'}
                  key={gif.id}
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
  favorites: PropTypes.object.isRequired,
  fetchTrendingGifs: PropTypes.func.isRequired,
  trending: PropTypes.array.isRequired
};

export default withRouter(GifGallery);
