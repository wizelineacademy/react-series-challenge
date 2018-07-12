import React from 'react';
import configureStore from 'redux-mock-store';
import Home from '../../Containers/HomePage';
import { mount } from "enzyme";
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
     mount( <Provider store={store}><Home/></Provider>);
})