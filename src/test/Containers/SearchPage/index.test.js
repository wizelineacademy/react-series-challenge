import React from 'react'
import configureStore from 'redux-mock-store'
import SearchPage from '../../../Containers/SearchPage';
import { mount } from "enzyme"
import { Provider } from 'react-redux';

const middlewares = []
const mockStore = configureStore(middlewares)

it('Search should mount', () => {
    const initialState = {
        search: {
            searchGifs: [],
            searchLoading: true
        }
    };

    const store = mockStore(initialState);
     mount( <Provider store={store}><SearchPage location={{state:{query:""}}}/></Provider>);
})