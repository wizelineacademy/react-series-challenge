import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../actions';
import { FavButton, ItemDiv } from './styled';

class Item extends Component {
  handleClick() {
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
    const { item, isFav, imgUrl } = this.props;
    return (
      <ItemDiv>
        <NavLink to={`/Details/${item.id}`}>
          <img src={imgUrl} alt={item.title}/>
        </NavLink>
        <FavButton
          className={isFav ? 'fav' : ''}
          onClick={this.handleClick.bind(this)}
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
