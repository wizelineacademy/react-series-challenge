import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ContainerListGiphy from './giphy/container/container-list-giphy';
import ContainerGiphysFavorites from './giphy-favorite/container/container-giphys-favorites';
import NotFound from './giphy/components/not-found';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ ContainerListGiphy } />
            <Route path="/giphys-favorites" component={ ContainerGiphysFavorites } />
            <Route path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}


