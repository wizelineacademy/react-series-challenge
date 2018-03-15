import React, { Component } from 'react'
import styled from 'styled-components';

class Image extends Component {
  render () {
    return (
      <StyledImage src={this.props.src} alt={this.props.alt}></StyledImage>
    )
  }
}
export default Image;

const StyledImage = styled.img`
  color: red;
`
