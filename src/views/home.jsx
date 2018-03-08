import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrending } from '../reducers/trending';

class Home extends Component {
  static propTypes = {
    fetchTrending: PropTypes.func.isRequired,
  };

  componentDidMount = () => this.props.fetchTrending();

  render() {
    return (
      <div>Home</div>
    );
  }
}

export default connect(
  ({ trending: { data, error, loading } }) => ({ data, error, loading }),
  { fetchTrending },
)(Home);
