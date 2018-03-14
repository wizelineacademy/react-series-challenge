import React, { Component } from 'react'
import styled from 'styled-components'
import GifTile from './GifTile'

class GifGrid extends Component {
  render () {
    return (
      <GridStyled>
        {
          this.props.gifs.map(gif => (
            <GifTile key={gif.id} data={gif} />
          ))
        }
      </GridStyled>
    )
  }
}

export default GifGrid

const GridStyled = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  width: 100%;
  overflow: hidden;
  align-items: center;
`
