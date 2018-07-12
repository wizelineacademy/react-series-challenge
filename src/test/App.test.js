import App from '../App';
import React from 'react';
import {shallow} from 'enzyme';
import 'jest-styled-components';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <App/>
        );
    });

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

});