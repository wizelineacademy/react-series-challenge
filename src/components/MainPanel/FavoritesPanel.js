import React, { Component } from 'react';
import GifListView from "./GifListView";
import ErrorBoundary from "../ErrorBoundary";

import { bindActionCreators } from "redux";
import actions from "../../actions";
import { connect } from "react-redux";

const { loadSavedFavorites } = actions.creators;

class FavoritesPanel extends Component {

  componentDidMount() {
    this.props.loadSavedFavorites();
  }

  render() {
    return (
      <div>
        <ErrorBoundary message="Unable to load.">
          <GifListView data={this.props.data} />
        </ErrorBoundary>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.favorites
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({loadSavedFavorites}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPanel);