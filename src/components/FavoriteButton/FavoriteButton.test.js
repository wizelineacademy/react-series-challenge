import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import FavoriteButton from "./FavoriteButton";


describe('test', () => {
    const initialState = { };
    const mockStore = configureStore();
    let store,wrapper;

    beforeEach(() => {
        let props = {
            favorite: true,
            gif: {
                id : "01",
                images: {
                    url: "https://media0.giphy.com/media/4TgL0taO3uU5H6kKcQ/giphy-preview.webp"
                }
            }
        };
        store = mockStore(initialState)
        wrapper = mount(shallow(<FavoriteButton store={store} {...props} />).get(0));
    })
    ///// Test button onClick
    test("Button on click", ()=> {
        const button = wrapper.find("button").first()
        button.simulate("click")
    })
});


