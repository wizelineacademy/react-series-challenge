import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import TrendingList from './components/TrendingList';
import { TrendingListComponent } from './components/TrendingList/TrendingList';
import { Provider } from 'react-redux';
import store from './store';

function mockItem() {
	// return mocked object
}
describe('Test Giphy Detail Component', () => {
	/*it('Component Mount', () => {
        const componentDidMount = jest.fn();
        TrendingList.prototype.componentDidMount = componentDidMount;
        const wrapper = mount(<BrowserRouter><Provider store={store}><TrendingList /></Provider></BrowserRouter>);
        wrapper.instance().componentDidMount = componentDidMount;
        expect(componentDidMount).toHaveBeenCalledTimes(1);
    });*/
    
    it('Renders Results', () => {
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
        const trending = {
            fetching: false,
            gifs: [{...gif}]
        }
        
        const getTrendingRequested=function(){}
        const wrapper = mount(<BrowserRouter><Provider store={store}><TrendingListComponent trending={trending} getTrendingRequested={getTrendingRequested}/></Provider></BrowserRouter>);
        expect(wrapper.find('GifThumbComponent').length).toBe(1);
    });
    it('Renders Loader', () => {
        const trending = {
            fetching: true,
            gifs: []
        }
        
        const getTrendingRequested=function(){}
        const wrapper = mount(<BrowserRouter><Provider store={store}><TrendingListComponent trending={trending} getTrendingRequested={getTrendingRequested}/></Provider></BrowserRouter>);
        expect(wrapper.find('svg').length).toBe(1);
    });
    
});
