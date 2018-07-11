import GifCards from '../GifCards';
import GifCard from '../GifCard/GifCard'
import GifCardControls from '../GifCardControls/GifCardControls'
import React, {Fragment} from 'react';
import { GifCardsStyled, StyledH1 } from '../GifCards.styled';
import { shallow, mount, render } from 'enzyme';

describe('GifCards', () => {
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


    beforeEach(() => {
        wrapper = shallow(
            <GifCards
            gifData = { searchResult } 
            addRemoveGif = { func } 
            searchedValue = { searchResult.searchedValue }/>
        );
    });

    test('should set GifCards ', () => {

        const comp = render(
            <Fragment>
                <GifCardsStyled key = { searchResult.id } {...themeSunny}>
                    <GifCard imageUrl = { searchResult.url }/>

                    <GifCardControls 
                    key = {1} 
                    addRemoveGif = { func } 
                    isFavorite = { searchResult.isFavorite } />
                </GifCardsStyled>
            </Fragment>)

        expect(comp).toHaveLength(1);
    });

    test('should not set GifCards ', () => {
        expect(wrapper.contains(
            <Fragment>
                <GifCardsStyled key = { searchResultEmpty.id } {...themeSunny}>
                    <GifCard imageUrl = { searchResultEmpty.url }/>

                    <GifCardControls 
                    key = {1} 
                    addRemoveGif = { func } 
                    isFavorite = { searchResultEmpty.isFavorite } />
                </GifCardsStyled>
            </Fragment>
        )).toBe(false);
    });

})
