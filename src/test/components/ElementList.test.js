import React from 'react';
import { Provider } from 'react-redux';
import ElementList from '../../components/ElementList';
import renderer from 'react-test-renderer';
import store from '../../store/index';
import localStorageMock from './localStorageMock';

describe('ElementList', () => {

    it('should render without problems', () => {
        const wrapper = renderer.create(
            <Provider store={store}>
                <ElementList />
            </Provider>
        ).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

});
