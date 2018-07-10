import React, { Component } from 'react';
import { connect } from 'react-redux';
import LikeStatus from 'components/likeStatus';

class Gif extends Component {
  render() {
    let likeRender = <LikeStatus liked={false} />;
    if (
      this.props.favorite[this.props.id] &&
      Boolean(this.props.favorite[this.props.id].liked)
    ) {
      likeRender = <LikeStatus liked={true} />;
    }
    return (
      <div className="gif" onClick={this.props.onClick}>
        <img
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
