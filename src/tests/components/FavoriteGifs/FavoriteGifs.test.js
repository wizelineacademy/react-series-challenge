import React from 'react';
import { Provider } from 'react-redux';
import FavoriteGifs from '../../../components/FavoriteGifs/FavoriteGifs';
import renderer from 'react-test-renderer';
import store from '../../../store'

describe('FavoriteGifs', () => {

    it('should render without problems', () => {
        const wrapper = renderer.create(
            <Provider store={store}>
                <FavoriteGifs />
            </Provider>
        ).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

});
