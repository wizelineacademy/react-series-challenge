import React, { Component } from 'react';

class LikeStatus extends Component {
  render(){
    if (Boolean(this.props.liked)) {
      return <span className="liked">Liked</span>
    } else {
      return <span className="not-liked">Not Liked</span>
    }
  }
}

export default LikeStatus;
