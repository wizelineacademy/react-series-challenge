import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBar from 'components/searchBar';
import GifList from 'components/gifList';
import trendingActions from 'actions/trending';
import searchActions from 'actions/search';
import { StyledHeading1 } from '../Heading1.style'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  componentDidMount = () => {
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
      <React.Fragment>
        <SearchBar value={this.searchValue} onChange={this.handleSearch} />
        <StyledHeading1>Gifs de moda y de novedad</StyledHeading1>
        { searchToggle }
      </React.Fragment>
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
