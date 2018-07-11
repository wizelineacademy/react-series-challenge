import App from '../App';
import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, NavbarContainer, NavbarLi, NavbarLink, AppBody, } from '../styles/App.style';


describe('App', () => {
    let Wrapper;

    beforeEach(() => {
		Wrapper = shallow(<App />);
    });
    
    // test('Should match snapshot', () => {
    //     expect(Wrapper).toMatchSnapshot();
    // });

    test('Should render a Navbar', () => {
		expect(Wrapper.find(Navbar)).toHaveLength(1);
    });

    test('Should render a NavbarContainer', () => {
		expect(Wrapper.find(NavbarContainer)).toHaveLength(1);
    });
    
    test('Should render a NavbarLi', () => {
		expect(Wrapper.find(NavbarLi)).toHaveLength(2);
    });
    
    test('Should render a NavbarLink', () => {
		expect(Wrapper.find(NavbarLink)).toHaveLength(0);
	});
});