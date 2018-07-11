import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import FavoritesPanel from './FavoritesPanel';
import ExplorePanel from './ExplorePanel';

import { bindActionCreators } from "redux";
import actions from "../../actions";
import { connect } from "react-redux";

const { loadSavedFavorites } = actions.creators;

class MainPanel extends Component {
  componentDidMount() {
    this.props.loadSavedFavorites();
  }

  render() {
    return (
      <Switch>
        <Route path="/explore" component={ExplorePanel} />
        <Route path="/favorites" component={FavoritesPanel} />
        <Redirect to="/explore" />
      </Switch>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({loadSavedFavorites}, dispatch)
)

/* 
withRouter HOC used to solve this issue:
https://github.com/ReactTraining/react-router/issues/4671
*/
export default withRouter(connect(null, mapDispatchToProps)(MainPanel));