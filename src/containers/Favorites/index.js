import React, { Component } from 'react';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import selectors from '../../selectors';
import Favorites from '../../components/Favorites';
class FavoritesWrapper extends Component {
  componentDidMount() {
    this.props.loadFavorites();
  }
  render() {
    return <Favorites {...this.props} />;
  }
}
export default connect(
  selectors.favoritesSelector,
  dispatcher
)(FavoritesWrapper);
