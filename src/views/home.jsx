import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchTrending } from '../reducers/trending';
import { Thumbnail } from '../components';

const Grid = styled.div`
  position: relative;
`;

class Home extends Component {
  static propTypes = {
    fetchTrending: PropTypes.func.isRequired,
    data: PropTypes.object,
  };

  static defaultProps = {
    data: undefined,
  };

  componentDidMount = () => {
    this.props.fetchTrending();
    this.calculatePositions();
  }

  componentDidUpdate = () => this.calculatePositions();

  calculatePositions = () => {
    if (!this.props.data) return;
    const { data } = this.props.data;

    const gridHeights = [0, 0, 0, 0];
    for (let i = 0; i < data.length; i++) {
      const note = this[`gif-${data[i].id}`];
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
    return (
      <div>
        <div>Home</div>
        <Grid>
          { data && data.data.map(({ id, title, images: { fixed_width_downsampled: { url, width, height } } }) => (<Thumbnail key={id} title={title} url={url} width={width} height={height} ref={(c) => { this[`gif-${id}`] = c; }} />)) }
        </Grid>
      </div>
    );
  }
}

export default connect(
  ({ trending: { data, error, loading } }) => ({ data, error, loading }),
  { fetchTrending },
)(Home);
