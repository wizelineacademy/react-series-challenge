import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { connect } from 'react-redux'

class GifTile extends Component {
  constructor(props) {
    super(props);
    this.showControls = this.showControls.bind(this);
    this.hideControls = this.hideControls.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
    this.state = {
      showControls: false
    };
  }

  render () {
    return (
      <Tile onMouseOver={this.showControls} onMouseLeave={this.hideControls}>
        {
          this.props.isFavorite(this.props.data.id) &&
          <IconFavorite>
            <span role="img" aria-label="favorite">⭐</span>
          </IconFavorite>
        }
        <NavLink to={'/details/' + this.props.data.id}>
          <ImageStyled src={this.props.data.images.fixed_width.url} alt={this.props.data.slug}/>
        </NavLink>
        {
          this.state.showControls && !this.props.isFavorite(this.props.data.id) &&
          <Controls>
            <ButtonStyled onClick={this.save}>Save to favorites</ButtonStyled>
          </Controls>
        }
        {
          this.state.showControls && this.props.isFavorite(this.props.data.id) &&
          <Controls>
            <ButtonStyledRed onClick={this.remove}>Remove from favorites</ButtonStyledRed>
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

  save () {
    this.props.saveFavorite(this.props.data)
  }

  remove () {
    this.props.removeFavorite(this.props.data.id)
  }
}

function mapStateToProps(state) {
  return {
    isFavorite: (id) => {
      if (state.favoriteGifs) {
        return !!state.favoriteGifs.find(gif => gif.id === id)
      }
      return false
    }
  };
}

function mapDispatchToProps (dispatch) {
  return {
    saveFavorite: (gifData) => dispatch({ type: 'SAVE_FAVORITE', gifData }),
    removeFavorite: (gifId) => dispatch({ type: 'REMOVE_FAVORITE', gifId })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GifTile);

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

const ButtonStyledRed = ButtonStyled.extend`
  background-color: rgba(255, 0, 0, 0.5);
`
const IconFavorite = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
`
