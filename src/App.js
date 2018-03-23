import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import store from './store';
import './App.css';

import TrendingList from './components/TrendingList';

class App extends Component {
  constructor(props)
  {
    super(props);

  }
  componentDidMount()
  {
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=kLIQQQN3aix9cb3YOKkP6kXlVIWjmsBI').then((resp) => resp.json()).then(
      response => console.log(response),
      error => console.log(error)
    )
    /*
    search: http://api.giphy.com/v1/gifs/search?api_key=kLIQQQN3aix9cb3YOKkP6kXlVIWjmsBI&q=food
    */
  }
  render() {
    return (
      <Provider store={store}>
        <TrendingList/>
      </Provider>
    );
  } 
}

export default App;
