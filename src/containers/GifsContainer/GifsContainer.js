import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import giphyActions from '../../actions/giphy';
import customActions from '../../actions/custom';
import { PolaroidContainer, SquareLink } from './style';

import SearchBar from '../../components/SearchBar'
import Title from '../../components/Title'
import Pagination from '../../components/Pagination';
import PolaroidPicture from '../../components/PolaroidPicture'

const FIRST_PAGE = 0;

class GifsContainer extends Component {

  componentWillMount () {
    const {
      match,
      getFavoriteGifs,
      getTrendingGifs,
      getGif,
      getFavorites,
    } = this.props;

    const { params } = match;

    const isSingleView = !!params.gif_id
    const isFavoritesView = match.path === '/favorites'

    if (isSingleView) {
      getGif(params.gif_id);
    } else if (isFavoritesView) {
      getFavoriteGifs(FIRST_PAGE)
    } else {
      getTrendingGifs(FIRST_PAGE) 
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.match.path === '/home' && this.props.match.path !== '/home') {
      this.props.getTrendingGifs(FIRST_PAGE); 
    }
    if (nextProps.match.path === '/favorites' && this.props.match.path !== '/favorites') {
      this.props.getFavoriteGifs(FIRST_PAGE); 
    }
  }

  render () {
    const { 
      gifArray,
      favoriteGif,
      favorites,
      getFavorites,
      filteredFavorites,
      getGif,
      match,
      searchGifs,
      history
    } = this.props;

    const isSingleView = !!match.params.gif_id;
    const isFavorite = match.path === '/favorites'
    const titleText = isFavorite && `You're viewing your favorite Gifs`;
    const gifs = isFavorite && filteredFavorites.length ? filteredFavorites : gifArray;
    return (
      <div>
        <SquareLink to={`/home`} home />
        <SquareLink to={`/favorites`} favorites />
        <SearchBar handleSubmit={searchGifs} history={history} />
        { !isSingleView && <Title>{ titleText }</Title> }
        <PolaroidContainer isSingleView={isSingleView}>
          { gifs.map(gif =>
            <PolaroidPicture
              key={gif.id}
              gif={gif}
              favorites={favorites}
              favoriteGif={favoriteGif}
              getGif={getGif}
              isSingleView={isSingleView}
            />
          )}
        </PolaroidContainer>
        <Pagination {...this.props}/>
      </div>
    );
  }
} 

const mapDispatchToProps = (dispatch) => {
  const {
    getTrendingGifsRequested,
    getFavoriteGifsRequested,
    getGifRequested,
    searchGifsRequested,
  } = giphyActions.creators;
  const { favoriteGif } = customActions.creators;
  return bindActionCreators({
    getTrendingGifs: getTrendingGifsRequested,
    getFavoriteGifs: getFavoriteGifsRequested,
    getGif: getGifRequested,
    searchGifs: searchGifsRequested,
    favoriteGif,
  }, dispatch);
};

const mapStateToProps = (state) => {
  const { 
    giphyReducer: {
      data,
      pagination,
      filteredFavorites,
      searchTerm,
    },
    customReducer: { favorites }
  } = state;
  return {
    gifArray: data,
    favorites,
    pagination,
    filteredFavorites,
    searchTerm,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GifsContainer);
