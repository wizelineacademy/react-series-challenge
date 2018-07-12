import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Home from '../../components/Views/Home';

describe('Home', () => {
    const initialState = {};

    const mockStore = configureStore();

    let store, container;

    beforeEach(()=>{
        store=mockStore(initialState)
        container=shallow(<Home 
                            store={store}
                            gifts={{}}/>)
    })

    it('should dispatch action', () => {
        expect(container).toMatchSnapshot();
    })
})
