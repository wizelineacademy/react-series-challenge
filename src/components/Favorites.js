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
    return (
      <div>
        <Search />
        <ItemList items={this.props.items} />
      </div>
    )
  }
}

const mapStateToProps = ({ favorites }) =>
  ({ items: favorites.items });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getFavoriteItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
