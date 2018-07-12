import React from 'react'
import configureStore from 'redux-mock-store'
import Gif from '../../components/Gif';
import { mount } from "enzyme"
import { Provider } from 'react-redux';

const middlewares = []
const mockStore = configureStore(middlewares)

it('Favpage should mount', () => {
    const initialState = {
        fav: {
            favGifs: []
        }
    };

    const store = mockStore(initialState);
     mount( <Provider store={store}><Gif url={"www.google.com"} id={"123"} key={"123"}/></Provider>);
})