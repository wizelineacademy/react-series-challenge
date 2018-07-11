import React from 'react';
import ThemeSelector from '../ThemeSelector';
import { shallow } from 'enzyme';

describe('ThemeSelector', () => {
    const func = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ThemeSelector changeTheme = { func } />
        );
    });

    test('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should set ThemeSelector ', () => {
        expect(wrapper.contains(
            <button onClick = { func }> Press me to change </button>
        )).toBe(true);
    });

})
