import React, { Component } from "react";
import { connect } from "react-redux";

import TileList from "../shared/TileList";

const SearchResults = ({ gifs, loaded }) => {
  if (!loaded) return <div>loading dfklgjlksfj...</div>;
  return <TileList gifs={gifs} />;
};

const mapStateToProps = state => {
  const { gifs, loaded } = state.searchReducer;
  return { gifs, loaded };
};

export default connect(mapStateToProps, null)(SearchResults);
