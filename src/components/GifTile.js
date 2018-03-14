import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

class GifTile extends Component {
  constructor(props) {
    super(props);
    this.showControls = this.showControls.bind(this);
    this.hideControls = this.hideControls.bind(this);
    this.state = {
      showControls: false,
    };
  }

  render () {
    return (
      <Tile onMouseOver={this.showControls} onMouseLeave={this.hideControls}>
        <NavLink to={'/details/' + this.props.data.id}>
          <ImageStyled src={this.props.data.images.fixed_width.url} alt={this.props.data.slug}/>
        </NavLink>
        {
          this.state.showControls &&
          <Controls>
            <ButtonStyled>Save to favorites</ButtonStyled>
          </Controls>
        }
      </Tile>
    )
  }

  showControls () {
    this.setState({
      showControls: true
    });
  }

  hideControls () {
    this.setState({
      showControls: false
    });
  }
}

export default GifTile

const Tile = styled.div`
  margin: 0;
  position: relative;
`;

const ImageStyled = styled.img`
  margin: 0;
  padding: 0;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
`

const Controls = styled.div`
  position: absolute;
  bottom: 10px;
  right: 25px;
`

const ButtonStyled = styled.button `
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: none;
  padding-top: calc(0.375em - 1px);
  height: 2.25em;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  user-select: none;
  &:focus {
    outline: 0;
  }
`
