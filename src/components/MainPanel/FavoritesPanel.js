import React, { Component } from 'react';
import GifListView from "./GifListView";
import ErrorBoundary from "../ErrorBoundary";

import actions from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const { filterFavorites } = actions.creators;

const FavoritesPanel = ({ data, filterFavorites, filter }) => {
  const filteredData = data.filter((element) => (
    element.title.toLowerCase().includes(filter.toLowerCase())
  ))
  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter" 
        onChange={(e) => filterFavorites(e.target.value)}
      />
      <ErrorBoundary message="Unable to load.">
        <GifListView data={filteredData} />
      </ErrorBoundary>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    data: state.favorites,
    filter: state.filterFavorites
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ filterFavorites }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPanel);