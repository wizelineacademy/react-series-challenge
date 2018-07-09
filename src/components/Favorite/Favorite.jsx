import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import filterTextActions from '../../actions/filterText';

import Template from '../Template';
import GifGrid from '../GifGrid';
import Gif from '../Gif';

const Favorite = ({
  favoriteGifs,
  filterFavoriteText,
  updateFilterFavoriteText,
}) => {
  const handleChange = (event) => {
    const { value } = event.target;
    updateFilterFavoriteText({ payload: { text: value } });
  };
  return (
    <Template>
      <input name="search-box" type="text" value={filterFavoriteText} onChange={handleChange} />
      <Link to="/trending" href="/trending">Go to Trending</Link>
      <div>
        <GifGrid gifs={favoriteGifs} filterText={filterFavoriteText} />
      </div>
    </Template>
  );
};

Favorite.propTypes = {
  filterFavoriteText: PropTypes.string.isRequired,
  updateFilterFavoriteText: PropTypes.func.isRequired,
  ...Gif.propTypes,
};

const mapStateToProps = (state) => {
  const {
    favoriteGifs,
    filterText,
  } = state;
  return {
    favoriteGifs,
    filterFavoriteText: filterText.favoriteFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { updateFilterFavoriteText } = filterTextActions.creators;
  return bindActionCreators({
    updateFilterFavoriteText,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
