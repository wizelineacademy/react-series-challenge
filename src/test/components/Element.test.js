import React from 'react';
import { Provider } from 'react-redux';
import Element from '../../components/Element';
import renderer from 'react-test-renderer';
import store from '../../store/index';
import {RelativeDiv,
    ElementImg,
    IconFavBlue,
    IconFav,
    Shadow} from '../../components/Element.styled';
import localStorageMock from './localStorageMock';

describe('Element', () => {

    it('should render without problems', () => {
        const wrapper = renderer.create(
            <Provider store={store}>
                <Element />
            </Provider>
        ).toJSON();
        expect(wrapper).toMatchSnapshot();

        const obj1 = renderer.create(<RelativeDiv/>).toJSON();
        expect(obj1).toHaveStyleRule('position', 'relative');

        const obj2 = renderer.create(<ElementImg/>).toJSON();
        expect(obj2).toHaveStyleRule('display', 'block');

        const obj3 = renderer.create(<ElementImg/>).toJSON();
        expect(obj3).toHaveStyleRule('border', '0');

        const obj4 = renderer.create(<ElementImg/>).toJSON();
        expect(obj4).toHaveStyleRule('width', '100%');

        const obj5= renderer.create(<ElementImg/>).toJSON();
        expect(obj5).toHaveStyleRule('position', '150px');

        const obj6 = renderer.create(<ElementImg/>).toJSON();
        expect(obj6).toHaveStyleRule('position', '150px');

        const obj7 = renderer.create(<IconFavBlue/>).toJSON();
        expect(obj7).toHaveStyleRule('color', 'blue');

        const obj8 = renderer.create(<IconFavBlue/>).toJSON();
        expect(obj8).toHaveStyleRule('position', 'absolute');

        const obj9 = renderer.create(<IconFavBlue/>).toJSON();
        expect(obj9).toHaveStyleRule('bottom', '1rem');

        const obj10 = renderer.create(<IconFavBlue/>).toJSON();
        expect(obj10).toHaveStyleRule('color', 'blue');


    });

});
