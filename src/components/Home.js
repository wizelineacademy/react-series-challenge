import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import GifList from './GifList';
import trendingActions from '../actions/trending';
import searchActions from '../actions/search';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchResult: {}
    }
  }

  componentWillMount = () => {
    this.props.getTrendingGifs();
  }

  handleSearch = (e) => {
    this.props.getSearchGifs(e.target.value);
  }

  render() {
    let searchToggle = <GifList gifs={this.props.trending} />;
    if (Object.keys(this.props.search).length > 0) {
      searchToggle = <GifList gifs={this.props.search} />;
    }

    return (
      <div className="home">
        <SearchBar value={this.searchValue} onChange={this.handleSearch} />
        <h1>Home</h1>
        { searchToggle }
      </div>
    )  
  }
}



const mapStateToProps = (state) => {
  const {
    trending,
    search
  } = state;
  
  return {
    trending,
    search
  };
};

const mapDispatchToProps = (dispatch) => {
  const { getTrendingGifs } = trendingActions.creators;
  const { getSearchGifs } = searchActions.creators;
  
  return bindActionCreators({
    getTrendingGifs,
    getSearchGifs
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
