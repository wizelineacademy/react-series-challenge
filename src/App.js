import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom"
import Fav from "./components/Fav"
import Home from "./components/Home"
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route path="/fav" component={Fav}/>
          <Route path="/" component={Home}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
