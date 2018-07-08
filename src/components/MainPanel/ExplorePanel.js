import React from 'react';
import GifListView from "./GifListView";
import SearchBar from './SearchBar';
import ErrorBoundary from "../ErrorBoundary";

const ExplorePanel = () => (
  <div>
    <SearchBar />
    <ErrorBoundary message="Unable to load.">
      <GifListView />
    </ErrorBoundary>
  </div>
)

export default ExplorePanel;