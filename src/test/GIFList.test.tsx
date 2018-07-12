import * as React from 'react';
import 'jest-enzyme';
import 'jest-styled-components'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme';
import  GIFList from '../components/presentational/GIFList';
import * as GIFS from './GIFS.json'
import { Provider } from 'react-redux';

describe('GIFList', () => {
    const mockStore = configureStore();
    const initialState = { trending: GIFS as string[] }
    let store;

    it('renders withouth crashing', () => {
        store = mockStore(initialState);
        const wrapper = mount(<Provider store={store}>
                <GIFList gifs={GIFS} />
            </Provider>);
        expect(wrapper).toMatchSnapshot();
    });

    describe('with empty GIFS', () => {
        it('it displays an message', () => {
            store = mockStore(initialState);
            const wrapper = mount(<Provider store={store}>
                    <GIFList gifs={[]} />
                </Provider>);
            expect(wrapper).toMatchSnapshot();
            expect(wrapper).toHaveText('No GIFs found!');
        });
    });
});