import * as React from 'react';
import 'jest-enzyme';
import 'jest-styled-components'
import configureStore from 'redux-mock-store'
import { mount, shallow, render } from 'enzyme';
import SearchContainer, { Search } from '../components/Search';
import { Provider } from 'react-redux';

describe('Search', () => {
    const mockStore = configureStore();
    let store: any;

    beforeEach(() => {
        store = mockStore();
    })

    it('renders withouth crashing', () => {
        const wrapper = mount( <Search store={store} /> );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with the given query as value', () => {
        const QUERY = 'Game of Thrones';
        store = mockStore({ search: QUERY })

        const wrapper = mount(<Provider store={store}>
            <SearchContainer />
        </Provider>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input')).toHaveValue(QUERY);
    });

    describe('when clearing the text input', () => {
        it('dispatches the fetch_gifs action', () => {
            const fetch_gifs_fn = jest.fn();
            const search_fn     = jest.fn();

            const event = { target: { value: '' } }

            const wrapper = mount(<Provider store={store}>
                <Search search={search_fn}
                    fetch_gifs={fetch_gifs_fn} />
                </Provider>)

            wrapper.find('Search').simulate('change', event);

            expect(search_fn).not.toHaveBeenCalled();
            expect(fetch_gifs_fn).toHaveBeenCalled();
        });
    });

    describe('when typing less than 3 characters', () => {
        it('does not call any action', () => {
            const fetch_gifs_fn = jest.fn();
            const search_fn     = jest.fn();

            const event = { target: { value: 'dr' } }

            const wrapper = mount(<Provider store={store}>
                <Search search={search_fn} fetch_gifs={fetch_gifs_fn} />
            </Provider>);

            wrapper.find('Search').simulate('change', event);

            expect(search_fn).not.toHaveBeenCalled();
            expect(fetch_gifs_fn).not.toHaveBeenCalled();
        });
    });

    describe('when typing more than 3 characters', () => {
        it('dispatches the search action', () => {
            const QUERY = 'dragon ball';

            const fetch_gifs_fn = jest.fn();
            const search_fn     = jest.fn();

            const event = { target: { value: QUERY } }

            const wrapper = mount(<Provider store={store}>
                <Search search={search_fn} fetch_gifs={fetch_gifs_fn} />
            </Provider>);

            wrapper.find('Search').simulate('change', event);

            expect(search_fn).toHaveBeenCalledWith(QUERY);
            expect(fetch_gifs_fn).not.toHaveBeenCalled();
        });
    });
});