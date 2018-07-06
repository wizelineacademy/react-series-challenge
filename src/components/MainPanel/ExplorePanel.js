import React from 'react';
import GifListView from "./GifListView";
import SearchBar from './SearchBar';

const ExplorePanel = () => (
  <div>
    <SearchBar /> 
    <GifListView />
  </div>
)

export default ExplorePanel;