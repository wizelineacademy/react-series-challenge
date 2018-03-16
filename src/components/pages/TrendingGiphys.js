import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../presentational/Container'
import GiphyContainer from '../presentational/GiphyContainer';
import SearchBar from '../presentational/SearchBar';
import Giphy from '../presentational/Giphy';
import { fetchTrendingGiphys, fetchGiphysSearch } from '../../actions';

class TrendingGiphys extends Component {
  componentWillMount() {
    this.props.fetchTrendingGiphys();
    this.searchGiphys = this.searchGiphys.bind(this);
  }

  searchGiphys(e) {
    const term = e.target.value;
    if (term !== '') {
      this.props.fetchGiphysSearch(term);
    } else {
      this.props.fetchTrendingGiphys();
    }
  }

  renderGiphys() {
    return this.props.giphys.map(giphy => 
        <Giphy giphy={giphy} key={giphy.id} />
    );
  }

  render() {
    return (
      <Container title="Trending giphys">
        <SearchBar searchFunction={this.searchGiphys} />
        <GiphyContainer>
          { this.renderGiphys() }
        </GiphyContainer>
      </Container>
    );
  };
}

const mapStateToProps = state => {
  return {
    giphys: state.trending.giphys,
  }
}

export default connect(mapStateToProps, { fetchTrendingGiphys, fetchGiphysSearch } )(TrendingGiphys);