import React, { Component } from 'react';
import {
  NavLink,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      
        <div>
          <Header>
            <h1>Giphy Challenge</h1>
            <ul>
              <li><NavLink to="/Home" activeClass="active">Home</NavLink></li>
              <li><NavLink to="/Favorites" activeClass="active">Favorites</NavLink></li>
            </ul>
          </Header>

        </div>
      
    );
  }
}

export default App;
