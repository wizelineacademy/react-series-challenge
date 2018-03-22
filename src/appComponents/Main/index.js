import React from 'react';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import Routes from '../Routes';
import Layout from '../../components/Layout';
import StyledApp from './styles.js';

const App = () => (
  <Provider store={store}>
    <StyledApp className="App">
      <Layout>
        <Routes />
      </Layout>
    </StyledApp>
  </Provider>
);

export default App;
