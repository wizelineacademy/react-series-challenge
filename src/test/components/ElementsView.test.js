import React from 'react';
import { Provider } from 'react-redux';
import ElementsView from '../../components/ElementsView';
import renderer from 'react-test-renderer';
import store from '../../store/index';
import localStorageMock from './localStorageMock';

describe('ElementsView', () => {

    it('should render without problems', () => {
        const wrapper = renderer.create(
            <Provider store={store}>
                <ElementsView />
            </Provider>
        ).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

});
