import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { favoritesActions } from '../actions';
import { Grid } from '../components';

class Favorites extends Component {
  static propTypes = {
    favorites: PropTypes.array.isRequired,
    fetchFavorites: PropTypes.func.isRequired,
  }

  componentDidMount = () => this.props.fetchFavorites();

  render = () => <Grid data={this.props.favorites} />;
}

export default connect(
  ({ favorites }) => ({ favorites }),
  { fetchFavorites: favoritesActions.creators.fetchFavorites },
)(Favorites);
