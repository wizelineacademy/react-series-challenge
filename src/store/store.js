import { createStore } from 'redux';
import combineReducers from './reducers';

const initialState = {};

const store = createStore(
    combineReducers,
    initialState
);

export default store;