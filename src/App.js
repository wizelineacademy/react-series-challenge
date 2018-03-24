import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './components/common/Theme/Global'

import Home from './components/Home'
import Navbar from './components/common/Navbar/index';


class App extends Component {
  render() {
    return (


      <div>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route path="/" component={Home} />

        </Switch>
      </div>



    );
  }
}

export default App;
