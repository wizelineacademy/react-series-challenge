import * as React from 'react';
import 'jest-enzyme';
import 'jest-styled-components'
import configureStore from 'redux-mock-store'
import { shallow, mount, ShallowWrapper } from 'enzyme';
import { AppState } from '../types';
import * as GIFS from './GIFS.json'
import Search from '../components/Search';

describe('GIFList', () => {
    const mockStore = configureStore();
    const initialState = { trending: GIFS as string[] }
    let store;

    it('renders withouth crashing', () => {
        store = mockStore(initialState);
        const state = store.getState() as AppState;
        const wrapper = shallow(<Search />);
        expect(wrapper).toMatchSnapshot();
    });
});