import React from 'react';
import { Provider } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import renderer from 'react-test-renderer';
import store from '../../store/index';
import localStorageMock from './localStorageMock';

describe('SearchBar', () => {

    it('should render without problems', () => {
        const wrapper = renderer.create(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        ).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

});
