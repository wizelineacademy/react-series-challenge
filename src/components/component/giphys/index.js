import React, { Component } from "react";

import ErrorBoundary from './../errorBoundary';

import styled from "styled-components";

const StyledGiphys = styled.div`
  float: left;
  position: relative;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
`;

class ImgG extends Component {

  handleError = (e) => {
    debugger;
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
    this.props.modifyLocal(data[index]);
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

        if (local.filter && !v.title.includes(local.filter)) {
          view = null;
        }

        return view;
      });
    }

    return (
      <div>
        {giphyView}
      </div>
    )
  }
}

export default Giphys;