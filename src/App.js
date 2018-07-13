import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from "./components/containers/home/";
import Favorites from "./components/containers/favorites";

import Navegation from "./components/component/navegation";

import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: serif;
    background-color: #9aab9529;
    font-size:18px;
    margin: 0;
  }
`;

const App = ({ ...props }) => {
  return (
    <React.Fragment>
      <Navegation/>
      <Switch>
        <Route path="/keeps"  component={Favorites} />
        <Route exact path="/home" component={Home} />
        <Redirect to={{
          pathname: "/home",
          state: { currentPath: (window.location.pathname) },
        }} />
      </Switch>
      </React.Fragment>
    );
  }

export default App;
