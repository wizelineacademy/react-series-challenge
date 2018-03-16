import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ItemList, Search } from './';
import { getTrendingItems } from '../actions';

class Home extends Component {
  componentWillMount() {
    this.props.getTrendingItems();
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

const mapStateToProps = ({ items }) =>
  ({ items: items.list });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getTrendingItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
