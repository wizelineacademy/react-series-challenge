import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { trendingActions, favoritesActions } from '../actions';
import { Grid, Loader } from '../components';

class Home extends Component {
  static propTypes = {
    loadingTrending: PropTypes.func.isRequired,
    fetchFavorites: PropTypes.func.isRequired,
    data: PropTypes.object,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    data: undefined,
    loading: false,
  };

  componentDidMount = () => {
    this.props.fetchFavorites();
    this.props.loadingTrending();
  }

  render() {
    const { data, loading } = this.props;
    return (
      <div>
        <div>Home</div>
        { loading && <Loader /> }
        { !loading && data && <Grid data={data.data} /> }
      </div>
    );
  }
}

export default connect(
  ({ trending: { data, error, loading } }) => ({ data, error, loading }),
  { loadingTrending: trendingActions.creators.loadingTrending, fetchFavorites: favoritesActions.creators.fetchFavorites },
)(Home);
