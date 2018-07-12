import * as React from 'react';
import 'jest-enzyme'

import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import FavsView from '../components/FavsView';
import configureStore from 'redux-mock-store'

import * as GIFS from './GIFS.json'

const FAVS = {}
for(let i = 0; i < 6; FAVS[GIFS[i].id] = GIFS[i++]);

describe('FavsSearch', () => {
    let store: any;
    const mockStore = configureStore();
    it('renders without crashing', () => {
        store = mockStore({ favs: FAVS });
        const wrapper = mount(<Provider store={store}>
            <FavsView />
        </Provider>);
        expect(wrapper).toMatchSnapshot();
    });

    it('contains the favorites in the store', () => {
        store = mockStore({ favs: FAVS });
        const wrapper = mount(<Provider store={store}>
            <FavsView />
        </Provider>);
        expect(wrapper.find('img').length).toBe(6);
    });

    describe('when filtering favs', () => {
        store = mockStore({
            favs: FAVS,
            filter_favs: 'amazing'
        });
        const wrapper = mount(<Provider store={store}>
            <FavsView />
        </Provider>);
        expect(wrapper.find('img').length).toBe(1);
    });
});