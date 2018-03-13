import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fav from '../actions/favorites';
import { Thumbnail } from '../components';

const GridWrapper = styled.div`
  position: relative;
`;

class Grid extends Component {
  static propTypes = {
    toggleFavorite: PropTypes.func.isRequired,
    favorites: PropTypes.array.isRequired,
  }

  componentDidMount = () => this.calculatePositions();
  componentDidUpdate = () => this.calculatePositions();

  calculatePositions = () => {
    const { data } = this.props;
    if (!data) return;

    const gridHeights = [0, 0, 0, 0];
    for (let i = 0; i < data.length; i++) {
      const note = this[`gif-${data[i].id}`];
      if (!note) continue;

      let minHeight = gridHeights[0];
      let minCol = 0;

      for (let col = 1; col < gridHeights.length; col++) {
        if (gridHeights[col] >= minHeight) continue;
        minHeight = gridHeights[col];
        minCol = col;
      }
      note.setPosition(minHeight, minCol);
      gridHeights[minCol] += note.getHeight();
    }
  }

  isFavorite = id => this.props.favorites.includes(id);

  render() {
    const { data, toggleFavorite } = this.props;
    if (!data) return null;

    return (
      <GridWrapper>
        { data.map((item) => {
          const { id, title } = item;
          const { images: { fixed_width_downsampled: { url, width, height } } } = item;
          const props = {
            id, title, url, width, height, toggleFavorite,
            ref: (c) => { this[`gif-${id}`] = c; },
            isFav: this.isFavorite(id),
          };
          return <Thumbnail key={`thumb-${id}`} {...props} />;
        }) }
      </GridWrapper>
    );
  }
}

export default connect(
  ({ favorites }) => ({ favorites }),
  { toggleFavorite: fav.creators.requestToggle },
)(Grid);
