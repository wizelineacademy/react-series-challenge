import React from "react";
import { connect } from "react-redux";

import Trending from "../Trending/TrendingGifs";
import FilteredGifs from "../Filtered/FilteredGifs";

const ListGifs = ({ trendGifs, searchGifs, onRequestTrendGifs }) =>
  searchGifs.data && searchGifs.data.length ? (
    <FilteredGifs {...searchGifs} />
  ) : (
    <Trending {...trendGifs} onRequestTrendGifs={onRequestTrendGifs} />
  );

const mapStateToProps = state => {
  const { trendGifs, searchGifs } = state;
  return {
    trendGifs,
    searchGifs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestTrendGifs: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGifs);
