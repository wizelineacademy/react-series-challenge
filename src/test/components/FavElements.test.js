import React from 'react';
import { Provider } from 'react-redux';
import FavoriteGifs from '../../components/FavElements';
import renderer from 'react-test-renderer';
import store from '../../store/index';
import localStorageMock from './localStorageMock';

//
describe('FavElements', () => {

    it('should render without problems', () => {
        const wrapper = renderer.create(
            <Provider store={store}>
                <FavoriteGifs />
            </Provider>
        ).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

});
