import React from 'react'
import configureStore from 'redux-mock-store'
import FavPage from '../../../Containers/FavPage';
import { mount } from "enzyme"
import { Provider } from 'react-redux';

const middlewares = []
const mockStore = configureStore(middlewares)

it('Favpage should mount', () => {
    const initialState = {
        fav: {
            favGifs: [],
            favLoading: true
        }
    };

    const store = mockStore(initialState);
     mount( <Provider store={store}><FavPage/></Provider>);
})