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
