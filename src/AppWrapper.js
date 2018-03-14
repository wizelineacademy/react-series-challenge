import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import theme from './constants/themeConfig';

const AppWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      {children}
    </Provider>
  </ThemeProvider>
);

export default AppWrapper;
