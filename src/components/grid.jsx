import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fav from '../actions/favorites';
import { Thumbnail } from '../components';

const GridWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 10px;
`;

class Grid extends Component {
  static propTypes = {
    toggleFavorite: PropTypes.func.isRequired,
    favorites: PropTypes.array.isRequired,
  }

  isFavorite = gif => this.props.favorites.some(item => item.id === gif.id);

  render() {
    const { data, toggleFavorite } = this.props;
    if (!data) return null;

    return (
      <GridWrapper>
        { data.map(gif => <Thumbnail key={`thumb-${gif.id}`} gif={gif} toggleFavorite={toggleFavorite} isFav={this.isFavorite(gif)} />) }
      </GridWrapper>
    );
  }
}

export default connect(
  ({ favorites }) => ({ favorites }),
  { toggleFavorite: fav.creators.requestToggle },
)(Grid);
