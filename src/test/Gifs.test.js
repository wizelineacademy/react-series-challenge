import React from 'react';
import configureStore from 'redux-mock-store';
import Gifs from '../components/Gifs';
import { mount } from "enzyme";
import { Provider } from 'react-redux';

const middlewares = []
const mockStore = configureStore(middlewares)

it('Favorites page mounted', () => {
    const initialState = {
        fav: {
            favGifs: []
        }
    };

    const store = mockStore(initialState);
     mount( <Provider store={store}><Gifs url={"www.google.com"} id={"123"} key={"123"}/></Provider>);
})