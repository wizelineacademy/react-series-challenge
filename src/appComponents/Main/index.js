import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import Routes from '../Routes';
import Layout from '../../components/Layout';
import './styles.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Layout>
            <Routes />
          </Layout>
        </div>
      </Provider>
    );
  }
}

export default App;
