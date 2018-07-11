import GifCards from '../../GifCards/GifCards';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary'
import GifFavorite from '../GifFavorite'
import { StyledGifFavorite } from '../GifFavorite.styled'
import SearchBar from '../../../UI/SearchBar'
import React from 'react';
import { shallow } from 'enzyme';

describe('GifFavorite', () => {
    const func = jest.fn();
    const searchResult = [{
        id: 1,
        searchedValue: "trendy",
        url: "https://image", 
        isFavorite: true,
    }]
    const searchResultEmpty = [];
    const themeSunny = {
        gifPageBackground: '#969ec3',
        favoritePageBackground: '#c8bed7',
        headerBackground: '#fde1cc',
        cardBackground: '#fec492',
    }
    let wrapper;
/*
    beforeEach(() => {
        wrapper = shallow(
            <GifFavorite />
        );
    });

    test('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    
    test('should set GifCards ', () => {
        expect(wrapper.contains(
            <StyledGifFavorite {...themeSunny}>
                    <SearchBar 
                    updateState = { func } 
                    handleSearch = { func } />
                <ErrorBoundary>
                    <GifCards 
                    gifData = { searchResult } 
                    addRemoveGif = { func } 
                    searchedValue = { func }/>
                </ErrorBoundary>
            </StyledGifFavorite>
        )).toBe(true);
    });*/

})
