import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import { MenuComponent } from './components/Menu/Menu';
import { Provider } from 'react-redux';
import store from './store';
import { delay } from 'redux-saga'

describe('Menu Component', () => {
	it('Component Mount', () => {
        const componentDidMount = jest.fn();
        Menu.prototype.componentDidMount = componentDidMount;
        mount(<BrowserRouter><Provider store={store}><Menu /></Provider></BrowserRouter>);
        expect(componentDidMount).toHaveBeenCalledTimes(1);
    });
    it('Toggle Menu', () => {
        const menuToggle = jest.fn();
        const wrapper = mount(<BrowserRouter><MenuComponent menu={{show: true}} menuToggle={menuToggle}/></BrowserRouter>);
        wrapper.find('a.favorite').simulate('click');
        expect(menuToggle).toHaveBeenCalledTimes(1);
        
        return delay(600).then(() => {

        });
        //expect(wrapper.find('a').length).toBe(2);
    });
    it('Toggle Menu', () => {
        const menuToggle = jest.fn();
        const wrapper = mount(<BrowserRouter><MenuComponent menu={{show: true}} menuToggle={menuToggle}/></BrowserRouter>);
        wrapper.find('a.trending').simulate('click');
        expect(menuToggle).toHaveBeenCalledTimes(1);
        return delay(600).then(() => {
            
        });
        //expect(wrapper.find('a').length).toBe(2);
    });
    it('Toggle Menu', () => {
        const menuToggle = jest.fn();
        const wrapper = mount(<BrowserRouter><MenuComponent menu={{show: true}} menuToggle={menuToggle}/></BrowserRouter>);
        wrapper.find('b').simulate('click');
        expect(menuToggle).toHaveBeenCalledTimes(1);
        return delay(600).then(() => {
            
        });
        //expect(wrapper.find('a').length).toBe(2);
    });
    it('calls unmount', () => {
        const componentWillUnmount = jest.fn();
        MenuComponent.prototype.componentWillUnmount = componentWillUnmount;
        const wrapper = mount(<BrowserRouter><MenuComponent menu={{show: true}}/></BrowserRouter>);
        //console.log(wrapper.instance());
        wrapper.unmount();
        expect(componentWillUnmount).toHaveBeenCalledTimes(1);
    });
    /*it('calls animation', () => {
        const menuToggle = jest.fn();
        const wrapper = mount(<BrowserRouter><MenuComponent menu={{show: true}} menuToggle={menuToggle}/></BrowserRouter>);
        wrapper.find('b').simulate('click');
        expect(menuToggle).toHaveBeenCalledTimes(1);
        return delay(600).then(() => {
            console.log(wrapper.find('a'))
            expect(wrapper.find('a').length).toBe(2);
            //console.log(new Date().getTime());
            return true;
        });
    });*/
});