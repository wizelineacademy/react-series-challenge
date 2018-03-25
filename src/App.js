import React, { Component } from 'react';
import  { Provider } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import store from './store';
import Navbar from './components/navbar'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/image/:id' />
            <Route path='/favorites' />
            <Route path='/' exact/>
            <Redirect to= '/not-found' />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
