import React, { Component } from 'react';
import { /*Link,*/ Redirect, Route, Switch, } from 'react-router-dom';
import ComponentHome from './components/ComponentHome';
import ComponentFavorites from './components/ComponentFavorites';
import ErrorBoundary from './components/ErrorBoundary';
// import './styles/challenge.css';
import { Navbar, NavbarContainer, NavbarLi, NavbarLink, AppBody, } from './styles/App.style';
import { Provider } from 'react-redux';
import store from './store';

const _store = store();
class App extends Component {
  render() {
    return (
      <Provider store={_store}>
        <div className="app">
          <Navbar>
            <NavbarContainer>
              <ul>
                <NavbarLi>
                  <Route path="/Home" children={({ match }) => {
                    const active = match ? 'active' : '';
                    return <NavbarLink to="/Home" active={active} >Home</NavbarLink>;
                  }} />
                </NavbarLi>
                <NavbarLi>
                  <Route path="/Favorites" children={({ match }) => {
                    const active = match ? 'active' : '';
                    return <NavbarLink to="/Favorites" active={active} className={active}>Favorites</NavbarLink>;
                  }} />
                </NavbarLi>
              </ul>
            </NavbarContainer>
          </Navbar>
          <AppBody>
            <ErrorBoundary>
              <Switch>
                <Route path="/Home" component={ComponentHome} />
                <Route path="/Favorites" component={ComponentFavorites} />
                <Redirect to={{ pathname: "/Home", }} />
              </Switch>
            </ErrorBoundary>
          </AppBody>
        </div>
      </Provider>
    );
  }
}


export default App;
