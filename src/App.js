import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Favs from "./components/Favs";
import Home from "./components/Home";
import Page404 from "./components/Page404";
//import { StyledAppDiv } from "./App.styles";
import StyledAppDiv from "./styles/StyledAppDiv"
class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <StyledAppDiv>
          <h1>React Challenge</h1>
          <NavLink to="/favs">Your favs</NavLink> |{" "}
          <NavLink to="/">Trending</NavLink>
          <Switch>
            <Route exact path="/favs" component={Favs} />
            <Route exact path="/" component={Home} />
            <Route component={Page404} />
          </Switch>
        </StyledAppDiv>
      </Provider>
    );
  }
}

export default App;
