import React from 'react'
import configureStore from 'redux-mock-store'
import App from '../App';
import { mount } from "enzyme"
import { Provider } from 'react-redux';

const middlewares = []
const mockStore = configureStore(middlewares)

it('Home should mount', () => {
    const initialState = {
        home: {
            trendingGifs: [],
            trendingLoading: true
        }
    };

    const store = mockStore(initialState);
     mount( <Provider store={store}><App/></Provider>);
})
