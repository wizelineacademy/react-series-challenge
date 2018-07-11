import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Redirect, NavLink, Switch, } from 'react-router-dom';
import Home from './components/Views/Home';
import Favorites from './components/Views/Favorites';
import { AppStyled, AppTitle, AppHeader, HeaderButtons } from './styled_component/App.styled'; 

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppStyled>
          <AppHeader>
            <HeaderButtons >
              <NavLink to="/Search" activeClass="active">Search</NavLink>
              <NavLink to="/Favorites" activeClass="active">Favorites</NavLink>
            </HeaderButtons>
          </AppHeader>

          <Switch>
              <Route path="/Search" component={Home}  />
              <Route path="/Favorites" component={Favorites}/>
              <Redirect to={{
                pathname: "/Search",
                state: { from: 'NOT FOUND PAGE' },
              }}/>
          </Switch>
          
        </AppStyled>
      </Provider>
    );
  }
}

export default App;
