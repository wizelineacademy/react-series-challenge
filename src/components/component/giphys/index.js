import React, { Component } from "react";

import ErrorBoundary from './../errorBoundary';

import styled from "styled-components";

const StyledGiphys = styled.div`
  display: inline-block;
  position: relative;
  margin: 10px;
`;

const StyledExit = styled.div`
  display: block;
  height: 15px;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  outline: none;
  opacity: 0.6;
  transition: 0.3s;
  &:hover{
    padding: 20px;
    opacity: 1;
    border-radius: 8px;
    font-size: 20px;
  }
`;

const StyledContainer = styled.div`
  text-align: center;
  background-color: #000000e8;
`;

class ImgG extends Component {

  handleError = (e) => {
    throw new Error('img, cant load');
  }

  render() {
    const { src, alt } = this.props;

    return <img src={src} alt={alt}  onError={(e)=>this.handleError(e)} />
  }
}

class Giphys extends Component {

  handleKeep = (event,index) => {
    event.preventDefault();
    const { data } = this.props.data;
    this.props.localModify(data[index]);
  }

  render() {
    let giphyView;
    const { data, local } = this.props;

    if (data && data.data) {

      giphyView = data.data.map((v, i) => {
        let view = (
          <StyledGiphys key={v.id}>
          <StyledButton onClick={(event) => this.handleKeep(event, i)}>{`${local.ids.includes(v.id) ? 'undo' : 'keep'}`}</StyledButton>
            <ErrorBoundary>
              <ImgG src={v.images.fixed_width.webp} alt={v.title}  />
            </ErrorBoundary>
          </StyledGiphys>
        );

        if (i > 0 && (i+1) % 3 === 0) {
          view = [view,<StyledExit />]
        }

        if (local.filter && !v.title.includes(local.filter)) {
          view = null;
        }

        return view;
      });
    }

    return (
      <StyledContainer>
        {giphyView}
      </StyledContainer>
    )
  }
}

export default Giphys;