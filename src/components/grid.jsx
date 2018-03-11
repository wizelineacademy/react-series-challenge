import React, { Component } from 'react';
import styled from 'styled-components';

import { Thumbnail } from '../components';

const GridWrapper = styled.div`
  position: relative;
`;

export default class Grid extends Component {
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

  render() {
    const { data } = this.props;
    if (!data) return null;

    return (
      <GridWrapper>
        { data.map(({ id, title, images: { fixed_width_downsampled: { url, width, height } } }) => (<Thumbnail key={id} id={id} title={title} url={url} width={width} height={height} ref={(c) => { this[`gif-${id}`] = c; }} />)) }
      </GridWrapper>
    );
  }
}
