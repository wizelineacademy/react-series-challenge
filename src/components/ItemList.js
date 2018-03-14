import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class ItemList extends Component {
  render() {
    return (
      <ul>
        <Item />
        <Item />
        <Item />
      </ul>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
