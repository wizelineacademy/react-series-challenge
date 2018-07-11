import React, {Fragment} from 'react';
import ThemeSelector from '../ThemeSelector';
import { shallow, mount } from 'enzyme';

describe('ThemeSelector', () => {
    const func = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ThemeSelector changeTheme = { func } />
        );
    });

    test('should set ThemeSelector ', () => {
        expect(wrapper.contains(
            <button onClick = { func }> Press me to change </button>
        )).toBe(true);
    });

})
