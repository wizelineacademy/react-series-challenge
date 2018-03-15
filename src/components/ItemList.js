import React, { Component } from 'react';
import { Item } from './';
import { ItemListDiv } from './styled';

class ItemList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ItemListDiv>
        { items && Object.getOwnPropertyNames(items)
            .map(prop => <Item item={items[prop]} id={prop} key={prop} />)
        }
      </ItemListDiv>
    );
  }
}

export default ItemList;
