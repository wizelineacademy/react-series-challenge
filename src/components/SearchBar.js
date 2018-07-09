import React from 'react';
import { connect } from 'react-redux'

import '../styles/SearchBar.css';
import trendingGifsActions from '../actions/trendingGifsApi';

const SearchBar = ({ fetchGifs }) => {
  return (
    <div className="SearchBar">
      <input type="text" onKeyPress={ fetchGifs } />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGifs: (event) => {
      if(event.key === 'Enter') {
        dispatch(trendingGifsActions.creators.getTrendingGifs());
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
