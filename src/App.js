import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Trending, Favorite } from './layout';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/trending" component={Trending} />
          <Route path="/favorite" component={Favorite} />
          <Redirect to="/trending" />
        </Switch>
      </Router>
      
    );
  }
}

export default App;
