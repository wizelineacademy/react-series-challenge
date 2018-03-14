import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Details from './pages/Details'
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
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
    count: state.count
  };
}

function mapDispatchToProps (dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT', payload: {amount: 2} }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
