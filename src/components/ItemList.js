import React, { Component } from 'react';
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

export default ItemList;
