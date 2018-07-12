import GiphyElement from '../../components/GiphyElement';
import React from 'react';
import {shallow} from 'enzyme';
import 'jest-styled-components';

describe('GiphyElement', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <GiphyElement/>
        );
    });

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

});