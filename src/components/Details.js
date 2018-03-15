import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item } from './';
import { DetailsDiv } from './styled';

class Details extends Component {
  render() {
    const { item } = this.props;
    const { id, images } = item;
    const url = (images && images.original && images.original.url) || '';

    return (
      <DetailsDiv>
        <h2>{item.title}</h2>
        <Item item={item} imgUrl={url} id={id} key={id} />
      </DetailsDiv>
    );
  }
}

const mapStateToProps = ({ favorites, items }, { match }) => {
  const id = match.params.id;
  const item = items.list[id] || favorites.items[id] || {};
  return ({ item });
};

export default connect(mapStateToProps)(Details);
