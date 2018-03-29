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
        expect(wrapper.find('GifThumbComponent').length).toBe(1);
    });
    it('calls filter from props when filtering is perform', () => {
        var props = {
            filter: jest.fn(),
        }
        const favorites = {
            gifs: []
        }
        const wrapper = mount(<FavoriteListComponent filterFavorite={props.filter} favorites={favorites}/>);
        expect(props.filter).toHaveBeenCalledTimes(0);
        wrapper.instance().filter();
        expect(props.filter).toHaveBeenCalledTimes(1);
    });
    it('dont call search when user types a not enter char', () => {
        const favorites = {
            gifs: []
        }
        const wrapper = mount(<FavoriteListComponent  favorites={favorites}/>);
        const filter = jest.fn();
        wrapper.instance().filter = filter;
        wrapper.instance().onKeyDown({keyCode: 13});
        expect(filter).toHaveBeenCalledTimes(1);
    });
    it('dont call search when user types a not enter char', () => {
        const favorites = {
            gifs: []
        }
        const wrapper = mount(<FavoriteListComponent  favorites={favorites}/>);
        const filter = jest.fn();
        wrapper.instance().filter = filter;
        wrapper.instance().onKeyDown({keyCode: 23});
        expect(filter).toHaveBeenCalledTimes(0);
    });
    it('calls unmount', () => {
        const componentWillUnmount = jest.fn();
        FavoriteList.prototype.componentWillUnmount = componentWillUnmount;
        const wrapper = mount(<BrowserRouter><Provider store={store}><FavoriteList /></Provider></BrowserRouter>);
        wrapper.unmount();
        expect(componentWillUnmount).toHaveBeenCalledTimes(1);
    });
});
