import React from "react";
import { connect } from "react-redux";

import TileList from "../shared/TileList";

const SearchResults = ({ gifs, loaded }) => (
  <TileList gifs={gifs} loading={!loaded} />
);

const mapStateToProps = state => {
  const { gifs, loaded } = state.searchReducer;
  return { gifs, loaded };
};

export default connect(mapStateToProps, null)(SearchResults);
