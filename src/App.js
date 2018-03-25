import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import Header from "./components/Header/Header";
import DetailView from "./components/DetailView/DetailView";
import HomeView from "./components/HomeView/HomeView";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/detail/:gifId" component={DetailView}/>
            <Route path="/home" component={HomeView}/>
            <Redirect to="/home" />
          </Switch>
        </Fragment>
      </Provider>
    );
  }
}
export default App;
