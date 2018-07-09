import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  actionTrendingGetDataRequest,
  actionSetToFav,
  actionSearchTermGetDataRequest
} from "../../../store/actions";
import { getTrendingData } from "../../../store/selectors/trendingSelectors";
import { getFavsDataIds } from "../../../store/selectors/favsSelectors";

import { GiPanel, SearchBar } from "../../../components";

class TrendingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.props.actionTrendingGetDataRequest({});
  }

  addToFavs = item => {
    this.props.actionSetToFav(item);
  };

  getInputValue = e => {
    this.props.actionSearchTermGetDataRequest(e.target.value);
  };

  render() {
    return [
      <SearchBar key={0} getInputValue={this.getInputValue} />,
      <GiPanel
        key={1}
        data={this.props.trending}
        toggleFavs={this.addToFavs}
        selectedFavs={this.props.favs}
      />
    ];
  }
}

function mapStateToProps(state) {
  let { trending, favs } = state;

  favs = getFavsDataIds(favs);
  trending = getTrendingData(trending);

  return {
    trending,
    favs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      actionTrendingGetDataRequest,
      actionSetToFav,
      actionSearchTermGetDataRequest
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingContainer);
