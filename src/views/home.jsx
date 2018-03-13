import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import trending from '../actions/trending';
import { Grid, Loader } from '../components';

class Home extends Component {
  static propTypes = {
    loadingTrending: PropTypes.func.isRequired,
    data: PropTypes.object,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    data: undefined,
    loading: false,
  };

  componentDidMount = () => this.props.loadingTrending();

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
  { loadingTrending: trending.creators.loadingTrending },
)(Home);
