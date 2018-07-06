import React, { Component } from "react";

class Gif extends Component {
  liked = like => {
    if (like) {
      return <p>Liked</p>;
    } else {
      return <p>Not Liked</p>;
    }
  };
  render() {
    return (
      <div>
        <img alt="" key={this.props.id} src={this.props.src} />
        {this.liked(this.props.liked)}
      </div>
    );
  }
}
export default Gif;
