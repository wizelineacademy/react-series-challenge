import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Tile from "../shared/Tile";
import actions from "./DetailsActions";

class Details extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.gifRequested({ id });
  }

  render() {
    const { gif, loaded } = this.props;

    if (!loaded) return <div>loading ...</div>
    return <Tile gif={gif} original={true}/>;
  }
}

const mapStateToProps = state => {
  const { gif, loaded } = state.detailsReducer;
  return { gif, loaded };
};

const mapDispatchToProps = dispatch => {
  const { gifRequested } = actions.creators;
  return bindActionCreators({ gifRequested }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
