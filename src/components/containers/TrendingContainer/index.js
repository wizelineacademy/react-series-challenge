import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionTrendingGetDataRequest } from "../../../store/actions";
//import PropTypes from "prop-types";

class TrendingContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.actionTrendingGetDataRequest();
  }

  render() {
    return <div>{JSON.stringify(this.props.trending)}</div>;
  }
}

function mapStateToProps(state) {
  const { trending } = state;
  return {
    trending
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      actionTrendingGetDataRequest
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingContainer);
