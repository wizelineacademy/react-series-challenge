import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, NavLink, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Favs from "./components/Favs";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import { AppStyledDiv, StyledAddFavButton } from "./App.styles";

class App extends Component {
  getApp() {
    return <AppStyledDiv />;
  }

  render() {
    return (
      <Provider store={store}>
        <AppStyledDiv>
          <h1>React Challenge</h1>
          <ul>
            <li>
              <NavLink to="/favs">Your favs</NavLink>
            </li>
            <li>
              <NavLink to="/">Trending</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/favs" component={Favs} />
            <Route exact path="/" component={Home} />
            <Route component={Page404} />
          </Switch>
        </AppStyledDiv>
      </Provider>
    );
  }
}

export default App;
