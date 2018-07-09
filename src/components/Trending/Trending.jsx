import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import trendingGifsActions from '../../actions/trendingGifs';
import filterTextActions from '../../actions/filterText';

import Template from '../Template';
import GifGrid from '../GifGrid';
import Gif from '../Gif';

const Trending = ({
  trendingGifs,
  filterTrendingText,
  fetchTrending,
  updateFilterTrendingText,
}) => {
  const handleChange = (event) => {
    const { value } = event.target;
    updateFilterTrendingText({ payload: { text: value } });
  };
  return (
    <Template>
      <input name="search-box" type="text" value={filterTrendingText} onChange={handleChange} />
      <button onClick={fetchTrending}>
        Fetch Trending Gifs
      </button>
      <Link to="/favorite" href="/favorite">Go to Favorite</Link>
      <div>
        <GifGrid gifs={trendingGifs} filterText={filterTrendingText} />
      </div>
    </Template>
  );
};

Trending.propTypes = {
  filterTrendingText: PropTypes.string.isRequired,
  fetchTrending: PropTypes.func.isRequired,
  updateFilterTrendingText: PropTypes.func.isRequired,
  ...Gif.propTypes,
};

const mapStateToProps = (state) => {
  const {
    trendingGifs,
    filterText,
  } = state;
  return {
    trendingGifs,
    filterTrendingText: filterText.trendingFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { fetchTrending } = trendingGifsActions.creators;
  const { updateFilterTrendingText } = filterTextActions.creators;
  return bindActionCreators({
    fetchTrending,
    updateFilterTrendingText,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
