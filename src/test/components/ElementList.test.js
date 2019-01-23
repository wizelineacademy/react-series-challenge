import React from 'react';
import { Provider } from 'react-redux';
import ElementList from '../../components/ElementList';
import renderer from 'react-test-renderer';
import store from '../../store/index';
import {List} from '../../components/ElementList.styled';
import 'jest-styled-components';
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

    const obj1 = renderer.create(<List/>).toJSON();
    expect(obj1).toHaveStyleRule('display','grid');
    const obj2 = renderer.create(<List/>).toJSON();
    expect(obj2).toHaveStyleRule('grid-gap', '10px');
    const obj3 = renderer.create(<List/>).toJSON();
    expect(obj3).toHaveStyleRule('grid-template-columns','repeat(auto-fill,minmax(250px,1fr))');

});
