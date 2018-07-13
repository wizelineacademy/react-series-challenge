import React, { Component } from 'react';
import GifListView from "./GifListView";
import SearchBar from './SearchBar';
import ErrorBoundary from "../ErrorBoundary";
import { bindActionCreators } from "redux";
import actions from "../../actions";
import { connect } from "react-redux";

const { getTrendingGifs } = actions.creators;

class ExplorePanel extends Component {

  componentDidMount() {
    this.props.getTrendingGifs();
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ErrorBoundary message="Unable to load.">
          <GifListView data={this.props.data} />
        </ErrorBoundary>
      </div>
    )
  }

}

const mapStateToProps = state => {
  const data = state.searchQuery? state.searchResults : state.trendingGifs;
  return {
    data
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({getTrendingGifs}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePanel);