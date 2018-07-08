import React, { Component } from 'react';
import {
    Route,
    Redirect,
    Link,
    NavLink,
    Switch,
    withRouter,
} from 'react-router-dom';

import SearchGif from './components/SearchGif';
import MainGifsView from './components/MainGifsView';

class App extends Component {
  render() {
    return (
      <div>
          <header>
              <h1>Giphy Explorer</h1>
              <SearchGif />
          </header>

          <main>
              <div>
                  <Switch>

                      <Route path="/" component={MainGifsView}/>

                  </Switch>
              </div>
          </main>

      </div>
    );
  }
}

export default App;
