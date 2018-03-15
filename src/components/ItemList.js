import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        { items && Object.getOwnPropertyNames(items)
            .map(prop => <Item item={items[prop]} id={prop} key={prop} />)
        }
      </div>
    );
  }
}

export default ItemList;
