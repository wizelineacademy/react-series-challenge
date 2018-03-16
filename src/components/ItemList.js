import React, { Component } from 'react';
import { Item } from './';
import { ItemListDiv } from './styled';

class ItemList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getItems(items) {
    return Object
      .getOwnPropertyNames(items)
      .map(prop => {
        const { images } = items[prop];
        const url = (images && images.fixed_width && images.fixed_width.url) || '';

        return <Item item={items[prop]} imgUrl={url} id={prop} key={prop} />;
      });
  }

  componentDidCatch(err, info) {
    this.setState({ hasError: true });
    // console.log(err, info);
  }

  render() {
    const { items } = this.props;
    if (this.state.hasError) {
      return <div>Oops!, something went wrong</div>;
    }

    return (
      <ItemListDiv>
        { items && this.getItems(items) }
      </ItemListDiv>
    );
  }
}

export default ItemList;
