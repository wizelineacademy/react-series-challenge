import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

class GifTile extends Component {
  render () {
    return (
      <Tile>
        <NavLink to={'/details/' + this.props.data.id}>
          <ImageStyled src={this.props.data.images.fixed_width.url} alt={this.props.data.slug}/>
        </NavLink>
      </Tile>
    )
  }
}

export default GifTile

const Tile = styled.div`
  margin: 0;
`;

const ImageStyled = styled.img`
  margin: 0;
  padding: 0;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
`
