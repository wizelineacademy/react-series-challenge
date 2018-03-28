import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import GiphyDetail from './components/GiphyDetail';
import { GiphyDetailComponent } from './components/GiphyDetail/GiphyDetail';
import { Provider } from 'react-redux';
import store from './store';

function mockItem() {
	// return mocked object
}
describe('Test Giphy Detail Component', () => {
	it('Component Mount', () => {
        const componentDidMount = jest.fn();
        GiphyDetail.prototype.componentDidMount = componentDidMount;
        const wrapper = mount(<BrowserRouter><Provider store={store}><GiphyDetail /></Provider></BrowserRouter>);
        expect(componentDidMount).toHaveBeenCalledTimes(1);
    });
    it('Test Renders Details', () => {
        const giphy = {
            fetching: false,
            gif: {
                id: "qaqsqQOyzV1m0",
                images: {
                    original: {
                        url: "https://media2.giphy.com/media/qaqsqQOyzV1m0/giphy.gif"
                    }
                },
                title: "paris GIF",
                import_datetime: "2014-03-26 03:31:49"
            }
        }
        const wrapper = mount(<GiphyDetailComponent giphy={giphy} favorites={{gifs: {}}}/>);
        expect(wrapper.find('h2').length).toBe(1);
    });
    it('Call to request giphy on load when you have a match giphy id', () => {
        const giphy = {
            fetching: false,
            gif: {
                id: "qaqsqQOyzV1m0",
                images: {
                    original: {
                        url: "https://media2.giphy.com/media/qaqsqQOyzV1m0/giphy.gif"
                    }
                },
                title: "paris GIF",
                import_datetime: "2014-03-26 03:31:49"
            }
        }
        const match = {
            params: {
                giphy_id: "qaqsqQOyzV1m0"
            }
        }
        const giphyRequest = jest.fn();

        const wrapper = mount(<GiphyDetailComponent giphy={giphy} favorites={{gifs: {}}} giphyRequest={giphyRequest} match={match}/>);
        expect(giphyRequest).toHaveBeenCalledTimes(1);
    });
    it('Added Favorite', () => {
        const giphy = {
            fetching: false,
            gif: {
                id: "qaqsqQOyzV1m0",
                images: {
                    original: {
                        url: "https://media2.giphy.com/media/qaqsqQOyzV1m0/giphy.gif"
                    },
                    preview_gif: {
                        url: "https://media2.giphy.com/media/qaqsqQOyzV1m0/giphy.gif"
                    },
                },
                title: "paris GIF",
                import_datetime: "2014-03-26 03:31:49"
            }
        }
        const toggleFavorite = jest.fn();
        const wrapper = mount(<GiphyDetailComponent giphy={giphy} favorites={{gifs: {}}} toggleFavorite={toggleFavorite}/>);
        wrapper.instance().addFavorite();
        expect(toggleFavorite).toHaveBeenCalledTimes(1);
    });
    it('Call to request giphy on load when you have a match giphy id', () => {
        const giphy = {
            fetching: false,
            gif: {
                id: "qaqsqQOyzV1m0",
                images: {
                    original: {
                        url: "https://media2.giphy.com/media/qaqsqQOyzV1m0/giphy.gif"
                    }
                },
                title: "paris GIF",
                import_datetime: "2014-03-26 12:04:49"
            }
        }
        const match = {
            params: {
                giphy_id: "qaqsqQOyzV1m0"
            }
        }
        const giphyRequest = jest.fn();

        const wrapper = mount(<GiphyDetailComponent giphy={giphy} favorites={{gifs: {"qaqsqQOyzV1m0":true}}} giphyRequest={giphyRequest} match={match}/>);
        expect(giphyRequest).toHaveBeenCalledTimes(1);
    });
    
});
