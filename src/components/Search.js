import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifGallery from './GifGallery';
import { isSearching, getSearchGifs, getQuery } from '../selectors/search';
import { searchGifsChangeQuery } from '../actions/search';
import history from '../history';
import { withRouter } from 'react-router-dom';

export class Search extends Component {
  componentDidMount() {
    const { searchGifsChangeQuery, match, stateQuery } = this.props;

    if (stateQuery) {
      return;
    }

    const { query } = match.params;

    if (!query) {
      history.push('/');
    }

    searchGifsChangeQuery(query);
  }

  render() {
    const { loading, gifs } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    };

    return (
      <GifGallery gifs={gifs} />
    );
  }
}

const mapDispatchToProps = {
  searchGifsChangeQuery
};

const mapStateToProps = state => ({
  loading: isSearching(state),
  gifs: getSearchGifs(state),
  stateQuery: getQuery(state)
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Search)
);
