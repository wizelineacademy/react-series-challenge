import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AppRouting from './AppRouting';

const App = () => (
  <Provider store={store}>
    <AppRouting />
  </Provider>
);

export default App;
