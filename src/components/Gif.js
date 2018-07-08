import React, { Component } from 'react';
import LikeStatus from './LikeStatus';

class Gif extends Component {
  render(){
    return (
      <div className="gif">
        <img src={this.props.src} alt={this.props.src} />
        <LikeStatus liked={this.props.liked} />
      </div>
    )  
  }
}

export default Gif;
