import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Menu, ItemMenu} from '../presentational';
import {AppContainer} from './App.styled';
import Home from './Home';
import Favorites from './Favorites';
import GifDetail from './GifDetail';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <header>
          <Menu>
            <ItemMenu exact to='/'>Home</ItemMenu>
            <ItemMenu to='/favorites'>Favorites</ItemMenu>
          </Menu>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Route 
            path="/gifs/:gif_id" 
            component={({match}) => {
              return <GifDetail gifID={match.params.gif_id} />
            }} />
          <Route component={NotFound} />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
