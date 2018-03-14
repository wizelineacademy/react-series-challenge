import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './Navbar'
import Home from './Home'
import Favorites from './Favorites'
import Details from './Details'
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Route exact path="/" component={Home}/>
          <Route path="/favs" component={Favorites} />
          <Route path="/details/:id" component={Details} />

          <p>{this.props.count}</p>
          <button onClick={this.props.increment}>+</button>
          <button  onClick={this.props.decrement}>-</button>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps (dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT', payload: {amount: 2} }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
