import React, { Component } from 'react';
import ContainerListGiphy from './giphy/container/container-list-giphy';
import ContainerGiphysFavorites from './giphy-favorite/container/container-giphys-favorites';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ContainerListGiphy } />
          <Route path="/giphys-favorites" component={ ContainerGiphysFavorites } />
        </Switch>
      </BrowserRouter>
    );
  }
}


