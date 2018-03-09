import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const ThumbnailWrapper = styled.section`
  position: absolute;
`;

export default class Thumbnail extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }

  setPosition = (top, column) => {
    const element = ReactDOM.findDOMNode(this);
    element.style.top = `${top}px`;
    element.style.left = `${(column * 25)}%`;
  }

  getHeight = () => {
    const element = ReactDOM.findDOMNode(this);
    const computedStyle = window.getComputedStyle(element);
    const height = computedStyle.getPropertyValue('height');
    return parseInt(height, 10) + 10;
  }

  render() {
    const { title, url, width, height } = this.props;
    return (
      <ThumbnailWrapper>
        <img src={url} alt={title} width={width} height={height} />
      </ThumbnailWrapper>
    );
  }
}
