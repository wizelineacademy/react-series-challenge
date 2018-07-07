import { createStore, applyMiddleware, compose } from 'redux';
import searchValues from '../reducers/searchValues';

const initialState = {};

const store = createStore(
  searchValues,
);

// Start runner and do functions

export default store;
