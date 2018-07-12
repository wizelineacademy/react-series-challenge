import SearchBar from '../../components/SearchBar'
import { shallow, simulate } from 'enzyme'
import React from 'react';

describe('SearchBar', () => {
    let component;
    const onInput = jest.fn()
    let input;

    beforeEach(() => {
        component = shallow(
            <SearchBar onInput={onInput} placeholder="Search" className="SearchBar" />
        )
    })

    test('Should Match with the snapshot', () => {
        expect(component).toMatchSnapshot()
    })

    test('Shoud onInput should be called', () => {
        component.simulate('input', { target: { value: 'BMO' } })
        expect(onInput).toBeCalled();
    })
    
    test('Should have a className', () => {
        expect(component.hasClass('SearchBar')).toBeTruthy()
    })
})