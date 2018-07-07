import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const myComponent = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
        </p>
  </div>
);

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/a"  render={() => (<div>HOLA</div>)} />
        <Route path="/" component={myComponent} />
      </Switch>
    );
  }
}

export default App;
