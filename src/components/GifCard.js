import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import favoriteActions from '../actions/favoriteActions';

import emptyStar from '../icons/empty-star.svg';
import star from '../icons/star.svg';
import '../styles/GifCard.css';

const GifCard = (props) => {
  var { favorite, id, images, title, toggleFavorite, user } = props;

  return (
    <div className="GifCard">
      { user &&
        <a href={ user.profile_url } className="GifCardUser">
          <img src={ user.avatar_url } alt={ user.username } />
        </a>
      }
      <img
        src={ favorite ? star : emptyStar }
        className="GifCardStar"
        alt="favorite icon"
        onClick={ () => toggleFavorite(id) }
      />

      <img src={ images.original.url } className="GifCardMain" alt={title} />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { id } = props;
  const { favorites } = state;

  return {
    favorite: favorites.indexOf(id) !== -1
  };
};

const mapDispatchToProps = (dispatch) => {
  const { toggleFavorite } = favoriteActions.creators;

  return bindActionCreators({ toggleFavorite }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GifCard);
