import React, { Component } from 'react';
import { HomeContainer } from './Home.styled';
import { GiphyList, InputSearch, ErrorWatcher } from '../../presentational';
import { connect } from 'react-redux';
import trendingGifsActions from '../../../actions/trendingGifs';
import favoriteGifsActions from '../../../actions/favoriteGifs';
const { creators } = trendingGifsActions;
const { getTrendingGifsRequested } = creators;
const { creators: creatorsFav } = favoriteGifsActions;
const { addFavoriteGifRequested, removeFavoriteGifRequested } = creatorsFav;
class Home extends Component {
  constructor(props) {
    super(props);
    this.searchGifs = this.searchGifs.bind(this);
    this.writtingTimmer = null;
  }
  componentDidMount () {
    const { getTrendingGifsRequested } = this.props;
    getTrendingGifsRequested();
  }

  searchGifs (input) {
    const { getTrendingGifsRequested } = this.props;
    return setTimeout(() => {
      getTrendingGifsRequested({query: input.value});
    }, 250);
  }

  render() {
    const {
      trendingGifs,
      getTrendingGifsRequested,
      addFavoriteGifRequested,
      removeFavoriteGifRequested
    } = this.props;
    return (
      <HomeContainer>
        <InputSearch 
          defaultValue={trendingGifs.query}
          placeholder='Search images ...' 
          onChange={({target: input}) => {
              if (this.writtingTimmer !== null) {
                clearTimeout(this.writtingTimmer);
                this.writtingTimmer = null;
              }
              this.writtingTimmer = this.searchGifs(input);
          }} />
        <GiphyList 
          dataSource={trendingGifs}
          onClickFirstPage={() => getTrendingGifsRequested({offset:1})}
          onClickPreviousPage={() => getTrendingGifsRequested({movePrevious:true})}
          onClickNextPage={() => getTrendingGifsRequested({moveNext:true})}
          onClickLastPage={() => getTrendingGifsRequested({moveLast:true})}
          clickAdd2Favorites={(source) => {
            if (source.isFavorite) {
              removeFavoriteGifRequested(source.id);
            } else {
              addFavoriteGifRequested(source);
            }
          }} />
        <ErrorWatcher visible={trendingGifs.error !== ''}>{trendingGifs.error}</ErrorWatcher>
      </HomeContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const {trendingGifs} = state;

  return {
    trendingGifs
  };
};

export default 
  connect(mapStateToProps, { 
    getTrendingGifsRequested,
    addFavoriteGifRequested,
    removeFavoriteGifRequested })(Home);
