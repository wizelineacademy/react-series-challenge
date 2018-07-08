import React, { Component } from 'react';

class LikeButton extends Component {
  render(){
    return <span onClick={this.props.likeToggle} className={(Boolean(this.props.liked)) ? 'liked' : 'not-liked'}>{(Boolean(this.props.liked)) ? 'liked' : 'not-liked'}</span>
  }
}

export default LikeButton;
