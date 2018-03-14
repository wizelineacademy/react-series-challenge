import React, { Component } from 'react'
import styled from 'styled-components';

class GifTile extends Component {
  render () {
    return (
      <Tile>
        {/* <pre>{JSON.stringify(this.props.data)}</pre> */}
        <img src={this.props.data.images.fixed_width.url} alt={this.props.data.slug}/>
      </Tile>
    )
  }
}

export default GifTile

const Tile = styled.div`
  width: 200px;
  display: inline-block;
  margin: 25px;
`;
