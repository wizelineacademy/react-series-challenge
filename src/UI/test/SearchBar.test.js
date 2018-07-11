import React from 'react';
import SearchBar from '../SearchBar'
import { StyledSearchbar, StyledInput, StyledButton } from '../Searchbar.styled';
import { shallow, render } from 'enzyme';

describe('SearchBar', () => {
    const func = jest.fn();
    const func1 = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <SearchBar 
            updateState = { func } 
            handleSearch = { func1 } />
        );
    });

    test('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should set internal components ', () => {
        const comp = render(
            <StyledSearchbar>
                <StyledInput 
                type="text" 
                placeholder = "Search for awesome gifs"
                onChange = { func } />

                <StyledButton onClick = { func1 } />  
            </StyledSearchbar>)

        expect(comp).toHaveLength(1);
    });

    test('should not set SearchBar ', () => {
        expect(wrapper.contains(
            <StyledSearchbar>
                <StyledInput 
                type="text" 
                placeholder = "Search for awesome gifs"
                onChange = { func } />

                <StyledButton onClick = { func1 } />  
            </StyledSearchbar>
        )).toBe(false);
    });
})
