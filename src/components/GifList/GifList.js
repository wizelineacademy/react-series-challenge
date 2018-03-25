import React, { Component } from 'react';
import {Gif} from "../Gif/Gif";
import {MasonryContainer} from "./GifList.styled";

export class GifList extends Component {
  render() {
    return (
      <MasonryContainer>
        { this.props.gifs.map(gif => <Gif key={gif.id} gif={gif} />) }
      </MasonryContainer>
    )
  }
}