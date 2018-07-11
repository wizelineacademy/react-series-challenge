import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import trendingGifsActions from '../../actions/trendingGifs';
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
  return bindActionCreators({
    fetchTrending,
    searchTrending,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
