import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App root test', () => {
    test('App shallow test', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
