import React, { Component } from "react";
import plus from "../../assets/plus.png";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import getTrendingGifsActions from "../../actions/trendingGifs";
import { StyledFavButton } from "../../App.styles";

class AddFavButton extends Component {
  addFav = event => {
    const { addFav } = this.props;

    var id = event.target.getAttribute("data-id");
    addFav(id);
  };

  render() {
    return (
      <StyledFavButton add onClick={this.addFav} data-id={this.props.id}>
        Add to favs
      </StyledFavButton>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  const { addFav } = getTrendingGifsActions.creators;
  return bindActionCreators(
    {
      addFav
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFavButton);
