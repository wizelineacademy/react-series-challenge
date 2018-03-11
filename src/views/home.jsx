import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTrending } from '../reducers/trending';
import { Grid, Loader } from '../components';

class Home extends Component {
  static propTypes = {
    fetchTrending: PropTypes.func.isRequired,
    data: PropTypes.object,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    data: undefined,
    loading: false,
  };

  componentDidMount = () => this.props.fetchTrending();

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
  { fetchTrending },
)(Home);
