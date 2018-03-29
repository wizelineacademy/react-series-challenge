import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {Menu, ItemMenu} from '../presentational';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu>
            <ItemMenu exact to='/'>Home</ItemMenu>
            <ItemMenu exact to='/favorites'>Favorites</ItemMenu>
          </Menu>
        </header>
        <hr />
        <Switch>
          <Route exact path="/" component={() => <span>Home</span>} />
          <Route path="/favorites" component={() => <span>Favorites</span>} />
        </Switch>
      </div>
    );
  }
}

export default App;
