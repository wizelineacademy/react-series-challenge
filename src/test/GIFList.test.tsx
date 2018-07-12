import * as React from 'react';
import 'jest-enzyme';
import 'jest-styled-components'
import configureStore from 'redux-mock-store'
import { shallow, mount, ShallowWrapper } from 'enzyme';
import  { GIFList } from '../components/presentational/GIFList';
import { AppState } from '../types';
import * as GIFS from './GIFS.json'

describe('GIFList', () => {
    const mockStore = configureStore();
    const initialState = { trending: GIFS as string[] }
    let store;

    it('renders withouth crashing', () => {
        store = mockStore(initialState);
        const state = store.getState() as AppState;
        const onToggle = jest.fn();
        const wrapper = mount(<GIFList
            onToggleFavorite={onToggle}
            gifs={state.trending}
            favs={state.favs} />);
        expect(wrapper).toMatchSnapshot();
    });

    describe('with empty GIFS', () => {
        it('matches snapshot', () => {
            store = mockStore({});
            const state = store.getState() as AppState;
            const onToggle = jest.fn();
            const wrapper = mount(<GIFList
                onToggleFavorite={onToggle}
                gifs={state.trending}
                favs={state.favs} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});