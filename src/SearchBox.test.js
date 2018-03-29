import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { SearchBox } from './components/SearchBox/SearchBox';
import { Provider } from 'react-redux';
import store from './store';

function simulateKeyPresses(input, characters) {
    for(let i = 0; i < characters.length; i++) {
        input.simulate('keyPress', {
        which: characters.charCodeAt(i),
        key: characters[i],
        keyCode: characters.charCodeAt(i)
      });
    }
  }
describe('Search Box', () => {
    it('calls search from props and history push when search is done', () => {
        var props = {
            search: jest.fn(),
            history: {
                push: jest.fn()
            }
        }
        const wrapper = mount(<SearchBox search={props.search} history={props.history}/>);
        expect(props.search).toHaveBeenCalledTimes(0);
        expect(props.history.push).toHaveBeenCalledTimes(0);
        wrapper.instance().search();
        expect(props.search).toHaveBeenCalledTimes(1);
        expect(props.history.push).toHaveBeenCalledTimes(1);
    });
    it('dont call search when user types a not enter char', () => {
        const wrapper = mount(<SearchBox />);
        const search = jest.fn();
        wrapper.instance().search = search;
        wrapper.instance().onKeyDown({keyCode: 23});
        expect(search).toHaveBeenCalledTimes(0);
    });
    it('calls search when user types enter', () => {
        const wrapper = mount(<SearchBox />);
        wrapper.instance().search = jest.fn();
        let { search } = wrapper.instance();
        expect(search).toHaveBeenCalledTimes(0);
        const input = wrapper.find('input');

        input.simulate('focus');
        input.simulate('change', { target: { value: 'Changed' } });
        input.simulate('keyDown', {
            which: 13,
            keyCode: 13,
            target: {
                blur() {
                // Needed since <EditableText /> calls target.blur()
                input.simulate('blur');
                },
            },
        });
        expect(search).toHaveBeenCalledTimes(1);/*
        console.log(input.get(0))
        console.log(input.val());
        expect(input.get(0).value).to.equal('Hello');*/

        /*let wrapper = shallow(<SearchBox />);
        var input = wrapper.find('input');
        console.log(wrapper.instance());
        console.log("value", input.val())
        console.log(input.simulate)
        simulateKeyPresses(input, 'anime');
        console.log("value", input.val())
        wrapper.find('input')
        /*wrapper.instance().handleSubmit = jest.fn();
        let { handleSubmit } = wrapper.instance();
        expect(handleSubmit).toHaveBeenCalledTimes(0);
        wrapper.find('#Contact-button-submit').simulate('click'); // the only simulate click I want
        wrapper.find('.btn-primary').simulate('click'); // the simulate click I also had to add
        expect(handleSubmit).toHaveBeenCalledTimes(1);*/
    });
});

