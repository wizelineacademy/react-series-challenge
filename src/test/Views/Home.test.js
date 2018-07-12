import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Home from '../../components/Views/Home';
import toJson from 'enzyme-to-json';

describe('Home', () => {
    const initialState = {};

    const mockStore = configureStore();

    let store, container;

    beforeEach(()=>{
        store=mockStore(initialState)
        container=mount(<Home 
                            store={store}
                            gifts={{"cdcd":"cdcdc"}}/>)
    })

    it('Home', () => {
        expect(toJson(container)).toMatchSnapshot();
    })
})
