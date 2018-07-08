import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionTrendingGetDataRequest } from "../../../store/actions";
import { getTrendingData } from "../../../store/selectors/trendingSelectors";
import { GiPanel } from "../../../components";
//import PropTypes from "prop-types";

class TrendingContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.actionTrendingGetDataRequest({});
  }

  render() {
    return (
      <div>
        <GiPanel data={this.props.trending} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { trending } = state;

  trending = getTrendingData(trending);

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
