import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import Search from './Search';
import { getFavoriteItems } from '../actions';

class Favorites extends Component {
  componentWillMount() {
    this.props.getFavoriteItems();
  }

  render() {
    const { items, searchResults } = this.props;
    return (
      <div>
        <Search isFavorites={true} />
        <ItemList items={searchResults || items} />
      </div>
    )
  }
}

const mapStateToProps = ({ favorites }) =>
  ({ items: favorites.items, searchResults: favorites.filtered });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getFavoriteItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
