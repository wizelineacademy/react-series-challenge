import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dispatcher from './dispatcher';
import Home from '../../components/Home';
import selectors from '../../selectors';

class HomeWrapper extends Component {
  componentDidMount() {
    this.props.setPath(this.props.match.path);
    this.props.loadTrendingGifs();
  }

  render() {
    return <Home {...this.props} />;
  }
}

HomeWrapper.propTypes = {
  loadTrendingGifs: PropTypes.func.isRequired,
  gifs: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(
  selectors.homeSelector,
  dispatcher
)(HomeWrapper);
