import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store'
import sinon from 'sinon';

// Component
import Favorites from "./../Favorites";

const mock = [
    { url: "https://media3.giphy.com/media/9D5c28pzK5sOcih2oE/100.gif", id: "9D5c28pzK5sOcih2oE", title: "happy louie anderson GIF by BasketsFX" },
    { url: "https://media1.giphy.com/media/jIptyaX5Q7tdH2jLNZ/100.gif", id: "jIptyaX5Q7tdH2jLNZ", title: "glow alison brie GIF by NETFLIX" }
]

describe('Favorites', () => {
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(function () {
        // moxios.install();
        store = mockStore({
            favorites: mock,
        });

        const mockFunction = jest.fn();

        wrapper = shallow(<Favorites match={{ path: '/favorites' }} store={store} handleSubmit={mockFunction} />);
    });

    it('click', () => {
        wrapper.dive().find('#deleteFavorites').at(0).simulate('click');
        // expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('submit', () => {
        wrapper.dive().find('form').simulate('submit');
    });
});