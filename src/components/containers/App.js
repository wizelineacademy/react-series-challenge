import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Menu, ItemMenu} from '../presentational';
import {AppContainer} from './App.styled';
import Home from './Home';

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
          <Route path="/favorites" component={() => <span>Favorites</span>} />
          <Route path="/gifs/:gif_id" component={
            ({match}) => <span>Detail of GIF {match.params.gif_id}</span>} />
          <Route component={() => <span>Not found</span>} />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
