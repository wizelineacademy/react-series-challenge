import React, { Component } from 'react';
import { FavoritesContainer } from './Favorites.styled';
import { GiphyList, InputSearch, ErrorWatcher } from '../../presentational';
import { connect } from 'react-redux';
import favoriteGifsActions from '../../../actions/favoriteGifs';
const { creators } = favoriteGifsActions;
const { getFavoriteGifsRequested, addFavoriteGifRequested, removeFavoriteGifRequested } = creators;
class Favorites extends Component {
  componentDidMount () {
    const { getFavoriteGifsRequested } = this.props;
    getFavoriteGifsRequested();
  }

  searchGifs (input) {
    const { getFavoriteGifsRequested } = this.props;
    return setTimeout(() => {
      getFavoriteGifsRequested({query: input.value});
    }, 250);
  }

  render() {
    const {
      favoriteGifs,
      getFavoriteGifsRequested,
      addFavoriteGifRequested,
      removeFavoriteGifRequested
    } = this.props;
    return (
      <FavoritesContainer>
        <InputSearch 
          defaultValue={favoriteGifs.query}
          placeholder='Search imagesin my favorites ...' 
          onChange={({target: input}) => {
              if (this.writtingTimmer !== null) {
                clearTimeout(this.writtingTimmer);
                this.writtingTimmer = null;
              }
              this.writtingTimmer = this.searchGifs(input);
          }} />
        <GiphyList 
          dataSource={favoriteGifs}
          onClickFirstPage={() => getFavoriteGifsRequested({offset:1})}
          onClickPreviousPage={() => getFavoriteGifsRequested({movePrevious:true})}
          onClickNextPage={() => getFavoriteGifsRequested({moveNext:true})}
          onClickLastPage={() => getFavoriteGifsRequested({moveLast:true})}
          clickAdd2Favorites={(source) => {
            if (source.isFavorite) {
              removeFavoriteGifRequested(source.id);
            } else {
              addFavoriteGifRequested(source);
            }
          }} />
        <ErrorWatcher visible={favoriteGifs.error !== ''}>{favoriteGifs.error}</ErrorWatcher>
      </FavoritesContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const {favoriteGifs} = state;

  return {
    favoriteGifs
  };
};

export default 
  connect(
    mapStateToProps,
    {
      getFavoriteGifsRequested,
      addFavoriteGifRequested,
      removeFavoriteGifRequested
    }
  )(Favorites);
