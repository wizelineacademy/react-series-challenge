import React, { Component } from 'react';

class LikeStatus extends Component {
  render(){
    return <span
      className={(Boolean(this.props.liked)) ? 'liked' : 'not-liked'}
    >
      {(Boolean(this.props.liked)) ? 'liked' : 'not-liked'}
    </span>
  }
}

export default LikeStatus;
