import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import AppRouting from './AppRouting';

const App = () => (
  <Provider store={store}>
    <Router>
      <AppRouting />
    </Router>
  </Provider>
);

export default App;
