import React, { Component } from "react";
class GiItem extends Component {
  constructor(props) {
    super(props);
    this.getClicked = this.getClicked.bind(this);
  }

  getClicked() {
    this.props.toggleFavs(this.props.giphy);
  }

  render() {
    const { giphy } = this.props;

    const img = giphy.images["fixed_height"];

    return <img src={img.url} alt={giphy.title} onClick={this.getClicked} />;
  }
}

export default GiItem;
