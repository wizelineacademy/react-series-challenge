import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../src/reducers'

const store = createStore(rootReducer)

export const WrapperProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
)
