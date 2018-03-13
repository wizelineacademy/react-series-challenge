import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import GifGalleryContainer from "./containers/GifGalleryContainer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from "./store";

const Home = (props) => <GifGalleryContainer dataSource={'GIPHY'} {...props} />;
const Favorites = (props) => <GifGalleryContainer dataSource={'favorites'} {...props} />;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={'/'} render={Home} />
        <Route path={'/favorites'} render={Favorites} />
        <Route path={'/detail/:id'} render={() => (<h2>DETAILS</h2>)} />
        <Route render={() => (<h2>NOT FOUND</h2>)} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
