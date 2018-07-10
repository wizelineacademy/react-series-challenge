import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Home from './containers/Home';
import Favorites from './containers/Favorites';
import { HeaderNav, HeaderNavLink } from './components/Header';
//import './App.css';

injectGlobal`
  body {
    
    margin: 0;
  }
  body, button{
    font-family: Ubuntu;
  }
`;

const theme = {
  primary: {
    background: '#000',
    foreground: '#fff',
  },
  secondary: {
    background: '#4965f3',
    foreground: '#fff',
  },
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <HeaderNav>
            <HeaderNavLink to="/">Trending gifs</HeaderNavLink>
            <HeaderNavLink to="/favorites">Mis favoritos</HeaderNavLink>
          </HeaderNav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
            <Redirect to="/" />
          </Switch>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
