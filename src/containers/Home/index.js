import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dispatcher from './dispatcher';
import Home from '../../components/Home';
import api from '../../services/api';
import selectors from '../../selectors';

console.log('selectors', selectors);

class HomeWrapper extends Component {
  constructor(props) {
    super(props);
    console.log('homeWrapper', props);
  }

  componentDidMount() {
    this.props.loadTrendingGifs();
  }

  render() {
    console.log('homeWrapper', this.props);
    return <Home gifs={this.props.gifs} isLoading={this.props.isLoading} />;
  }
}

HomeWrapper.propTypes = {
  loadTrendingGifs: PropTypes.func.isRequired,
  gifs: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(
  selectors.homeSelector,
  dispatcher
)(HomeWrapper);

//export default HomeWrapper;
