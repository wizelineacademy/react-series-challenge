import React from 'react';
import { Provider } from 'react-redux';
import GifCard from '../../../components/GifCard/GifCard';
import { GifContainer, GifOverlay, GifTitle, GifOverlayLoading, Gif, FavoriteBtn } from '../../../components/GifCard/GifCard.styled';
import renderer from 'react-test-renderer';
import store from '../../../store'
import 'jest-styled-components'


describe('GifCard', () => {

    beforeAll(() => {
        global.localStorage = {
            getItem: function (any = null) {
                return null;
            }
        };
    });

    it('should render without problems', () => {
        const wrapper = renderer.create(
            <Provider store={store}>
                <GifCard />
            </Provider>
        ).toJSON();
        expect(wrapper).toMatchSnapshot();

        const gifContainerTree = renderer.create(<GifContainer/>).toJSON();
        expect(gifContainerTree).toHaveStyleRule('position', 'relative');

        const gifOverlayTree = renderer.create(<GifOverlay />).toJSON();
        expect(gifOverlayTree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.0)');

        const gifTitleTree = renderer.create(<GifTitle />).toJSON();
        expect(gifTitleTree).toHaveStyleRule('visibility', 'hidden');

        const gifOverlayLoadinTree = renderer.create(<GifOverlayLoading />).toJSON();
        expect(gifOverlayLoadinTree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.9)');

        const gifTree = renderer.create(<Gif />).toJSON();
        expect(gifTree).toHaveStyleRule('max-height', '150px');

        const favoriteBtnTree = renderer.create(<FavoriteBtn />).toJSON();
        expect(favoriteBtnTree).toHaveStyleRule('visibility', 'hidden');
    });

});
