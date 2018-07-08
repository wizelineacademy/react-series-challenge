import React from 'react';

import starFav from './favorite.png';
import starNotFav from './addToFavorites.png';

import actions from '../../actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const { toggleFavorite } = actions.creators;

const Star = ({ active, id, toggleFavorite, gif }) => (
  <img 
    style={{display: 'block', margin: '5px auto'}}
    src={active? starFav:starNotFav}
    onClick={() => toggleFavorite(id, gif)}
  />
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({ toggleFavorite }, dispatch)
)

export default connect(null, mapDispatchToProps)(Star);