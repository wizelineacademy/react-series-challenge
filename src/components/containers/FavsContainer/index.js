import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchBar from "../../molecules/SearchBar/index";
import GiPanel from "../../molecules/GiPanel/index";
import { actionFavDelete } from "../../../store/actions";
import { getFavsData } from "../../../store/selectors/favsSelectors";

export class FavsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  removeFromFavs = item => {
    this.props.actionFavDelete(item);
  };

  render() {
    return [
      <SearchBar key={0} />,
      <GiPanel
        key={1}
        data={this.props.favs}
        toggleFavs={this.removeFromFavs}
      />
    ];
  }
}

function mapStateToProps(state) {
  let { favs } = state;

  favs = getFavsData(favs);

  return {
    favs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      actionFavDelete
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavsContainer);
