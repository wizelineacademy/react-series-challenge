import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GiPanel } from "../../../components";
import { actionFavDelete } from "../../../store/actions";
import { getFavsData } from "../../../store/selectors/favsSelectors";

class FavsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  removeFromFavs = item => {
    this.props.actionFavDelete(item);
  };

  render() {
    return <GiPanel data={this.props.favs} addToFavs={this.removeFromFavs} />;
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
