import React, { Component } from 'react';
import GifListView from "./GifListView";
import ErrorBoundary from "../ErrorBoundary";

import actions from "../../actions";
import { connect } from "react-redux";

const FavoritesPanel = ({ data }) => (
  <div>
    <ErrorBoundary message="Unable to load.">
      <GifListView data={data} />
    </ErrorBoundary>
  </div>
)

const mapStateToProps = state => {
  return {
    data: state.favorites
  }
}

export default connect(mapStateToProps)(FavoritesPanel);