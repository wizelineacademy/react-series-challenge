import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Home from '../../components/Views/Home';

describe('Home', () => {
    const initialState = {};

    const mockStore = configureStore();

    let store, container;

    beforeEach(()=>{
        store=mockStore(initialState)
        container=mount(<Home 
                                gifts={{}}
                                store={store}/>)
    })

    it('should dispatch action', () => {
        expect(container).toMatchSnapshot();
    })
})
