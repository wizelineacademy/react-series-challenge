import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import FavoriteList from './components/FavoriteList';
import { FavoriteListComponent } from './components/FavoriteList/FavoriteList';
import { Provider } from 'react-redux';
import store from './store';

function mockItem() {
	// return mocked object
}
describe('Test Giphy Detail Component', () => {
	it('Component Mount', () => {
        const componentDidMount = jest.fn();
        FavoriteList.prototype.componentDidMount = componentDidMount;
        const wrapper = mount(<BrowserRouter><Provider store={store}><FavoriteList /></Provider></BrowserRouter>);
        wrapper.instance().componentDidMount = componentDidMount;
        expect(componentDidMount).toHaveBeenCalledTimes(1);
    });
    
    it('Renders Favorites', () => {
        const gif = {
            id: "qaqsqQOyzV1m0",
            images: {
                preview_gif: {
                    url: "https://media2.giphy.com/media/qaqsqQOyzV1m0/giphy.gif"
                }
            },
            title: "paris GIF",
            import_datetime: "2014-03-26 03:31:49"
        };
        const data = {"qaqsqQOyzV1m0" : {...gif}}
        const favorites = {
            fetching: false,
            gifs: data
        }
        
        const wrapper = mount(<BrowserRouter><Provider store={store}><FavoriteListComponent favorites={favorites}/></Provider></BrowserRouter>);
        expect(wrapper.find('GifThumb').length).toBe(1);
    });
});
