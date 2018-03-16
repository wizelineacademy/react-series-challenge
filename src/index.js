import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GifGalleryContainer from "./containers/GifGalleryContainer";
import DetailContainer from "./containers/DetailContainer";
import NotFound from "./components/NotFound";
import store from "./store";

const Home = (props) => <GifGalleryContainer dataSource={'GIPHY'} {...props} />;
const Favorites = (props) => <GifGalleryContainer dataSource={'favorites'} {...props} />;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={'/'} render={Home} />
        <Route path={'/favorites'} render={Favorites} />
        <Route path={'/detail/:id'} component={DetailContainer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
