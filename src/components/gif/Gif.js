import React, { Component } from 'react';
import { connect } from 'react-redux';
import LikeStatus from 'components/likeStatus';

export class Gif extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let likeRender = <LikeStatus liked={false} />;
    if (
      this.props.favorite &&
      this.props.favorite[this.props.id] &&
      Boolean(this.props.favorite[this.props.id].liked)
    ) {
      likeRender = <LikeStatus liked={true} />;
    }
    return (
      <div className="gif" src={this.props.src} onClick={this.props.onClick}>
        <img
          className="img"
          src={this.props.src}
          alt={this.props.title}
          title={this.props.title}
        />
        { likeRender }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    favorite
  } = state;
  
  return {
    favorite
  };
};

export default connect(mapStateToProps)(Gif);
