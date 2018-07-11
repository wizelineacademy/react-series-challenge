import GifCards from '../../GifCards/GifCards';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary'
import { StyledGifPage } from '../GifPage.styled'
import SearchBar from '../../../UI/SearchBar'
import React from 'react';
import { shallow } from 'enzyme';
import GifPage from '../GifPage';

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
            <GifPage />
        );
    });

    test('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    
    test('should set GifCards ', () => {
        expect(wrapper.contains(
            <StyledGifPage {...themeSunny}>
                <SearchBar 
                updateState = { func } 
                handleSearch = { func } />

                <ErrorBoundary>
                    <GifCards 
                    gifData = { searchResult } 
                    addRemoveGif = { func } 
                    searchedValue = { func }/> 
                </ErrorBoundary>        
            </StyledGifPage>
        )).toBe(true);
    });*/

})
