import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import { SearchResultsComponent } from './components/SearchResults/SearchResults';
import { Provider } from 'react-redux';
import store from './store';

function mockItem() {
	// return mocked object
}
describe('Test Giphy Detail Component', () => {
	it('Component Mount', () => {
        const componentDidMount = jest.fn();
        SearchResults.prototype.componentDidMount = componentDidMount;
        const wrapper = mount(<BrowserRouter><Provider store={store}><SearchResults /></Provider></BrowserRouter>);
        wrapper.instance().componentDidMount = componentDidMount;
        expect(componentDidMount).toHaveBeenCalledTimes(1);
    });
    
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
        const search = {
            fetching: false,
            gifs: [{...gif}]
        }
        
        const wrapper = mount(<BrowserRouter><Provider store={store}><SearchResultsComponent search={search}/></Provider></BrowserRouter>);
        expect(wrapper.find('GifThumb').length).toBe(1);
    });
    it('Renders Loader', () => {
        const search = {
            fetching: true,
            gifs: []
        }
        
        const wrapper = mount(<BrowserRouter><Provider store={store}><SearchResultsComponent search={search}/></Provider></BrowserRouter>);
        expect(wrapper.find('svg').length).toBe(1);
    });
});
