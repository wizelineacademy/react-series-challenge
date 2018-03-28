import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import GifThumb from './components/GifThumb';
import { GifThumbComponent } from './components/GifThumb/GifThumb';
import { Provider } from 'react-redux';
import store from './store';

function mockItem() {
	// return mocked object
}
describe('Test Giphy Detail Component', () => {
	
    it('Added Favorite', () => {
        
        const toggleFavorite = jest.fn();
        const wrapper = mount(<BrowserRouter><GifThumbComponent toggleFavorite={toggleFavorite} favorites={{gifs: {qaqsqQOyzV1m0:true}}} id="qaqsqQOyzV1m0"/></BrowserRouter>);
        wrapper.find("svg").simulate('click');
        expect(toggleFavorite).toHaveBeenCalledTimes(1);
    });
    
});
