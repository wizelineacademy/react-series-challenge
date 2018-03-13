import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import search from '../actions/search';
import { Grid, Loader } from '../components';

class Search extends Component {
  static propTypes = {
    data: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object,
    match: PropTypes.object,
    fetchGifs: PropTypes.func.isRequired,
  }
  static defaultProps = {
    data: undefined,
    error: undefined,
    loading: false,
    match: { },
  }

  componentDidMount = () => {
    const { match: { params: { text } } } = this.props;
    this.props.fetchGifs(text);
  }

  render() {
    const { data, loading, error, match: { params: { text } } } = this.props;
    if (error) return (<div>{error.message}</div>);
    if (!data && !loading) return null;

    return (
      <div>
        { text }
        { loading && <Loader /> }
        { !loading && data && (
          <div>
            { `Showing ${data.data.length} GIFs of ${data.pagination.total_count}`}
            <Grid data={data.data} />
          </div>
        ) }
      </div>
    );
  }
}

export default connect(
  ({ search: { data, error, loading } }) => ({ data, error, loading }),
  { fetchGifs: search.creators.requestSearch },
)(Search);
