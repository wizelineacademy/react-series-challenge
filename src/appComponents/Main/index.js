import React, { Component } from 'react';
import Routes from '../Routes';
import Layout from '../../components/Layout';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Routes />
        </Layout>
      </div>
    );
  }
}

export default App;
