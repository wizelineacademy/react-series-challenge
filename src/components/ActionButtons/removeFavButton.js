import React, { Component } from "react";
import remove from "../../assets/remove.png";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import getTrendingGifsActions from "../../actions/trendingGifs";
import { StyledFavButton } from "../../App.styles";

class RemoveFavButton extends Component {
  removeFav = event => {
    const { removeFav } = this.props;

    var id = event.target.getAttribute("data-id");
    removeFav(id);
  };

  render() {
    return (
      <StyledFavButton remove onClick={this.addFav} data-id={this.props.id}>
        Remove
      </StyledFavButton>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  const { removeFav } = getTrendingGifsActions.creators;
  return bindActionCreators(
    {
      removeFav
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFavButton);
