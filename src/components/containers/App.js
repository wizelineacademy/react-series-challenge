import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Menu, ItemMenu} from '../presentational';
import {AppContainer} from './App.styled';
import Home from './Home';
import Favorites from './Favorites';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <header>
          <Menu>
            <ItemMenu exact to='/'>Home</ItemMenu>
            <ItemMenu exact to='/favorites'>Favorites</ItemMenu>
            {/* <ItemMenu exact to='/gifs/123'>Detail</ItemMenu> */}
          </Menu>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/gifs/:gif_id" component={
            ({match}) => <span>Detail of GIF {match.params.gif_id}</span>} />
          <Route component={NotFound} />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
