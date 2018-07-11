import GifCard from '../GifCard';
import React from 'react';
import { StyledGifCard, StyledImage } from '../GifCard.styled'
import { shallow, mount, render } from 'enzyme';

describe('GifCard', () => {
  let wrapper;
  const imageUrl = "https://image"

    beforeEach(() => {
        wrapper = shallow(
            <GifCard imageUrl = {imageUrl}/>
        );
    });

    test('should set StyledGifCards ', () => {
        expect(wrapper.contains(
        <StyledGifCard>
            <StyledImage 
            src = {imageUrl}
            alt = "Loading Great Gif :D ..."
            />
        </StyledGifCard>)).toBe(true);
    });
})