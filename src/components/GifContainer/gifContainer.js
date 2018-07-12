import React, { Component } from "react";
import { AddFavButton, RemoveFavButton } from "../ActionButtons";
import heart from "../../assets/heart.png";
import {
  StyledGifContainer,
  StyledFavImg,
  StyledGifImg
} from "../../App.styles";

class GifContainer extends Component {
  render() {
    let actionButton;
    if (this.props.isFav === -1) {
      if (this.props.action === "add") {
        actionButton = <AddFavButton id={this.props.id} />;
      } else {
        actionButton = <RemoveFavButton id={this.props.id} />;
      }
    }
    return (
      <StyledGifContainer>
        <StyledGifImg
          src={this.props.url}
          alt={this.props.title}
          key={"trending-" + this.props.id}
        />

        {this.props.isFav === -1 ? (
          ""
        ) : (
          <StyledFavImg
            alt={"fav" + this.props.title}
            key={"fav" + this.props.id}
            src={heart}
          />
        )}
        <hr />
        <label>{this.props.title}</label>
        {actionButton}
        <hr />
      </StyledGifContainer>
    );
  }
}

export default GifContainer;
