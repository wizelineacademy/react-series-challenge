import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ThumbnailWrapper = styled.section`
  position: absolute;
`;

const IconsDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  :hover a {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Icon = styled.a`
  margin: 2px;
  opacity: 0;
  transform: translateY(50%);

  > i {
    display: block;
    font-size: 23.52941176px;
    line-height: 40px;
    width: 40px;
    background-color: #ffffff;
    text-align: center;
    color: #000000;
  }

  > i:hover {
    background-color: #4da3e2;
    color: #ffffff;
    cursor: pointer;
  }
`;

export default class Thumbnail extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
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
    const { id, title, url, width, height } = this.props;
    return (
      <ThumbnailWrapper>
        <Link to={`/gifs/${id}`}><img src={url} alt={title} width={width} height={height} /></Link>
        <IconsDiv>
          <Icon alt="Fav"><i className="far fa-thumbs-up" /></Icon>
        </IconsDiv>
      </ThumbnailWrapper>
    );
  }
}
