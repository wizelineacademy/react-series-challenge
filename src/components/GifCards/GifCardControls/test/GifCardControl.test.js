import GifCardControls from '../GifCardControls';
import React from 'react';
import { StyledGifCardControls, StyledButton } from '../GifCardControls.styled'
import { shallow } from 'enzyme';

describe('GifCardControls', () => {
  const func = jest.fn();
  const valueKey = 1;
  const favorite = false;
  let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <GifCardControls
            key = {valueKey} 
            addRemoveGif = {func} 
            isFavorite = {favorite} />
        );
    });

    test('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should set GifCardControls ', () => {
        const comp = shallow(
        <StyledGifCardControls>
            <StyledButton active onClick = {func}> 
                {favorite ? <h1>😢 Remove me 😢</h1> : <h1>✨ Fav me! ✨</h1>} 
            </StyledButton>
        </StyledGifCardControls>)

        expect(comp).toHaveLength(1);
    });

})
