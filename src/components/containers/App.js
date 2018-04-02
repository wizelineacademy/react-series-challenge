import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Menu, ItemMenu} from '../presentational';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Menu>
            <ItemMenu exact to='/'>Home</ItemMenu>
            <ItemMenu exact to='/favorites'>Favorites</ItemMenu>
            <ItemMenu exact to='/gifs/123'>Detail</ItemMenu>
          </Menu>
        </header>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={() => <span>Favorites</span>} />
          <Route path="/gifs/:gif_id" component={
            ({match}) => <span>Detail of GIF {match.params.gif_id}</span>} />
          <Route component={() => <span>Not found</span>} />
        </Switch>
      </div>
    );
  }
}

export default App;
