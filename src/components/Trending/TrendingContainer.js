import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import trendingGifsActions from '../../actions/trendingGifs';
import favoriteGifsActions from '../../actions/favoriteGifs';
import Trending from './Trending';

const mapStateToProps = (state) => {
  const {
    trendingGifs,
    favoriteGifs,
    filterText,
  } = state;
  return {
    trendingGifs,
    favoriteGifs,
    filterTrendingText: filterText.trendingFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { fetchTrending, searchTrending } = trendingGifsActions.creators;
  const { fetchFavorite } = favoriteGifsActions.creators;
  return bindActionCreators({
    fetchTrending,
    searchTrending,
    fetchFavorite,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
