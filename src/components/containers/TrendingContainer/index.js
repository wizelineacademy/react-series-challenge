import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  actionTrendingGetDataRequest,
  actionSetToFav
} from "../../../store/actions";
import { getTrendingData } from "../../../store/selectors/trendingSelectors";
import { GiPanel } from "../../../components";

class TrendingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.actionTrendingGetDataRequest({});
  }

  addToFavs = item => {
    this.props.actionSetToFav(item);
  };

  render() {
    return <GiPanel data={this.props.trending} addToFavs={this.addToFavs} />;
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
      actionTrendingGetDataRequest,
      actionSetToFav
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingContainer);
