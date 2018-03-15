import React, { Component } from 'react';
import { Item } from './';
import { ItemListDiv } from './styled';

class ItemList extends Component {
  getItems(items) {
    return Object
      .getOwnPropertyNames(items)
      .map(prop => {
        const { images } = items[prop];
        const url = (images && images.fixed_width && images.fixed_width.url) || '';

        return <Item item={items[prop]} imgUrl={url} id={prop} key={prop} />;
      });
  }

  render() {
    const { items } = this.props;
    return (
      <ItemListDiv>
        { items && this.getItems(items) }
      </ItemListDiv>
    );
  }
}

export default ItemList;
