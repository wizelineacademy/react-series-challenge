import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../actions';
import { FavButton, ItemDiv } from './styled';

class Item extends Component {
  onClick() {
    const {
      addFavorite,
      removeFavorite,
      isFav,
      item
    } = this.props;

    if (isFav) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  }

  render() {
    const { item, isFav } = this.props;
    const { images, title } = item;
    const url = (images && images.fixed_width && images.fixed_width.url) || '';
    return (
      <ItemDiv>
        <img src={url} alt={title}/>
        <FavButton
          className={isFav ? 'fav' : ''}
          onClick={this.onClick.bind(this)}
        />
      </ItemDiv>
    );
  }
}

const mapStateToProps = ({ favorites }, { id }) =>
  ({ isFav: !!favorites.items[id] });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addFavorite, removeFavorite }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Item);
