import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GiPanel, SearchBar } from "../../../components";
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
