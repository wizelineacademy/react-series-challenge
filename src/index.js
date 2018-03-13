import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import HomeContainer from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from "./store";

const HomeContainerWithProps = (props) => <HomeContainer dataSource={'GIPHY'} {...props} />;
const FavoritesContainerWithProps = (props) => <HomeContainer dataSource={'favorites'} {...props} />;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={'/'} render={HomeContainerWithProps} />
        <Route path={'/favorites'} render={FavoritesContainerWithProps} />
        <Route path={'/detail/:id'} render={() => (<h2>DETAILS</h2>)} />
        <Route render={() => (<h2>NOT FOUND</h2>)} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
