import React, { Component } from 'react';
import { Link, Redirect, Route, Switch, } from 'react-router-dom';
import ComponentHome from './components/ComponentHome';
import ComponentFavorites from './components/ComponentFavorites';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/challenge.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="navbar">
          <div className="navbar-container">
            <ul>
              <li>
                <Route path="/Home" children={({ match }) => {
                  const active = match ? 'active' : '';
                  return <Link to="/Home" className={active}>Home</Link>;
                }} />
              </li>
              <li>
                <Route path="/Favorites" children={({ match }) => {
                  const active = match ? 'active' : '';
                  return <Link to="/Favorites" className={active}>Favorites</Link>;
                }} />
              </li>
            </ul>
          </div>
        </header>
        <div className="container">
          <ErrorBoundary>
            <Switch>
              <Route path="/Home" component={ComponentHome} />
              <Route path="/Favorites" component={ComponentFavorites} />
              <Redirect to={{ pathname: "/Home", }} />
            </Switch>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}


export default App;
