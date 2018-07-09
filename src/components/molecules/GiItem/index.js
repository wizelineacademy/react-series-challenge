import React, { Component } from "react";
import styled from "styled-components";

const StyledImg = styled.div`
  img {
    border: 1em solid red;
    border-radius: 1em;
  }
`;

class GiItem extends Component {
  constructor(props) {
    super(props);
    this.getClicked = this.getClicked.bind(this);
  }

  getClicked() {
    this.props.toggleFavs(this.props.giphy);
  }

  render() {
    const { giphy, selectedFavs } = this.props;

    const img = giphy.images["fixed_height"];

    const isFav =
      selectedFavs !== undefined
        ? selectedFavs.indexOf(giphy.id) !== -1
        : false;

    if (isFav) {
      return (
        <StyledImg>
          <img src={img.url} alt={giphy.title} onClick={this.getClicked} />
          <p>Selected</p>
        </StyledImg>
      );
    }

    return <img src={img.url} alt={giphy.title} onClick={this.getClicked} />;
  }
}

export default GiItem;
