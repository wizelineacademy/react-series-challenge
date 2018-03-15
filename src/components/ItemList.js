import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        { items && items.map(item => <Item {...item} key={item.id} />) }
      </ul>
    );
  }
}

export default ItemList;
