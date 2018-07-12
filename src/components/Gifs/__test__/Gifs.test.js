import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store'
import sinon from 'sinon';

// Component
import Gifs from "./../Gifs";

const mockGifs = {
    data: [
        { id: "9D5c28pzK5sOcih2oE", title: 'hola amigo', images: { fixed_height_small: { url: "https://media0.giphy.com/media/3o72FeZuTL3u0mG3Vm/100.gif" } } },
    ]
}

const mockGifs1 = {
    data: [
        { id: "9D5c28pzK5sOcih21E", title: 'hola amigo', images: { fixed_height_small: { url: "https://media0.giphy.com/media/3o72FeZuTL3u0mG3Vm/100.gif" } } },
    ]
}

const mock = [
    { url: "https://media3.giphy.com/media/9D5c28pzK5sOcih2oE/100.gif", id: "9D5c28pzK5sOcih2oE", title: "happy louie anderson GIF by BasketsFX" },
    { url: "https://media1.giphy.com/media/jIptyaX5Q7tdH2jLNZ/100.gif", id: "jIptyaX5Q7tdH2jLNZ", title: "glow alison brie GIF by NETFLIX" }
]


describe('Gifs', () => {
    const mockStore = configureStore();
    let store, store1, wrapper;

    beforeEach(function () {
        // moxios.install();
        store = mockStore({
            gif: mockGifs,
            favorites: mock,
        });

        store1 = mockStore({
            gif: mockGifs1,
            favorites: mock,
        });

        wrapper = shallow(<Gifs match={{ path: '/' }} store={store} />);
    });

    it('click1', () => {
        wrapper = shallow(<Gifs match={{ path: '/' }} store={store1} />);
        wrapper.dive().find('button').simulate('click');
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('click', () => {
        wrapper.dive().find('button').simulate('click');
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

});