import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import SearchBar from "./SearchBar";


describe('test', () => {
    const value = "Hola Mundo!";
    const initialState = { };
    const mockStore = configureStore();
    let store,wrapper;

    beforeEach(() => {
        let props = {
            from: "/"
        }
        store = mockStore(initialState)
        wrapper = mount(shallow(<SearchBar store={store} {...props} />).get(0));
        const input = wrapper.find("input").first()
        input.simulate("change", {
            target: { value }
        })
    })
    ////// Test submit form
    test("Should submit query", () => {
        const fakeEvent = { preventDefault () {} };
        const form = wrapper.find("form").first()
        form.simulate("submit", fakeEvent)
        expect(wrapper.state().submitted).toEqual(true);
    })
    ///// Test button onClick
    test("Button on click", ()=> {
        const button = wrapper.find("button").first()
        button.simulate("click")
        expect(wrapper.state().submitted).toEqual(true);
    })
    ////// Test change state input
    test("Shoud update the state property `value`", () => {
        expect(wrapper.state().value).toEqual(value)
    })
});


