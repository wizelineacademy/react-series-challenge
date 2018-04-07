import React, { Component } from 'react';
import { FavoritesContainer } from './Favorites.styled';
import { GiphyList, InputSearch, ErrorWatcher } from '../../presentational';
import { connect } from 'react-redux';
import favoriteGifsActions from '../../../actions/favoriteGifs';
const { creators } = favoriteGifsActions;
const { getFavoriteGifsRequested } = creators;
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
    const {favoriteGifs, getFavoriteGifsRequested} = this.props;
    console.log('​Favorites -> render -> favoriteGifs', favoriteGifs);
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
          onClickLastPage={() => getFavoriteGifsRequested({moveLast:true})} />
        <ErrorWatcher visible={favoriteGifs.error !== ''}>{favoriteGifs.error}</ErrorWatcher>
      </FavoritesContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const {favoriteGifs} = state;
  console.log('​mapStateToProps -> state', state);

  return {
    favoriteGifs
  };
};

export default connect(mapStateToProps, { getFavoriteGifsRequested })(Favorites);
