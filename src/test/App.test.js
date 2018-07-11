import React from 'react'
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import store from '../store';
import { mount } from 'enzyme';
import App from '../App';

describe('App root test', () => {
    const initialState = {};
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [];
    const mockStore = configureStore();
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Provider store={store}><Router><App/></Router></Provider>)
    });

    test('mount test', () => {

    });
});
