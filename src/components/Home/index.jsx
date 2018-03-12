import React from 'react';
import PropTypes from 'prop-types';
import {HomeWrapper, SearchButton, SearchInput, SearchWrapper, TrendingGifCards} from './Home.style';
import searchIcon from './search.png';
import GifCard from "../GifCard";

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchTrendingGifs();
  }

  render() {
    return (
      <HomeWrapper>
        <SearchWrapper>
          <SearchInput placeholder={'Type to search cool GIFs'} />
          <SearchButton src={searchIcon} />
        </SearchWrapper>
        <TrendingGifCards>
          {
            this.props.trending.map((gif) => {
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

Home.propTypes = {
  fetchTrendingGifs: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  trending: PropTypes.array.isRequired
};

export default Home;
