import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import AppRoutes from './routes'

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AppRoutes/>
      </Provider>
    )
  }
}

export default App;
