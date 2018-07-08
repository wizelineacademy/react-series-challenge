import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dispatcher from './dispatcher';
import selectors from '../../selectors';
import Favorites from '../../components/Favorites';
class FavoritesWrapper extends Component {
  componentDidMount() {
    this.props.setPath(this.props.match.path);
    this.props.loadFavorites();
  }
  render() {
    return <Favorites {...this.props} />;
  }
}

FavoritesWrapper.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(
  selectors.favoritesSelector,
  dispatcher
)(FavoritesWrapper);
