import React from 'react';
import {  mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { GifThumbComponent } from './components/GifThumb/GifThumb';

describe('Test Giphy Detail Component', () => {
	
    it('Added Favorite', () => {
        
        const toggleFavorite = jest.fn();
        const wrapper = mount(<BrowserRouter><GifThumbComponent toggleFavorite={toggleFavorite} favorites={{gifs: {qaqsqQOyzV1m0:true}}} id="qaqsqQOyzV1m0"/></BrowserRouter>);
        wrapper.find("svg").simulate('click');
        expect(toggleFavorite).toHaveBeenCalledTimes(1);
    });
    
});
