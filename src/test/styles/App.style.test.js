import React from 'react';
import { Navbar, NavbarContainer, NavbarLi, NavbarLink, AppBody, ContainerInputText, InputText, H4, } from '../../styles/App.style';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Test app style', () => {
    test('Should match Navbar', () => {
        const navbar = renderer.create(<Navbar />).toJSON();
        expect(navbar).toMatchSnapshot();
        expect(navbar).toHaveStyleRule('float', 'left');
    });

    test('Should match NavbarContainer', () => {
        const navbarContainer = renderer.create(<NavbarContainer />).toJSON();
        expect(navbarContainer).toMatchSnapshot();
        expect(navbarContainer).toHaveStyleRule('display', 'flex');
    });

    test('Should match NavbarLi', () => {
        const navbarLi = renderer.create(<NavbarLi />).toJSON();
        expect(navbarLi).toMatchSnapshot();
    });

    test('Should match AppBody', () => {
        const appBody = renderer.create(<AppBody />).toJSON();
        expect(appBody).toMatchSnapshot();
    });

    test('Should match ContainerInputText', () => {
        const containerInputText = renderer.create(<ContainerInputText />).toJSON();
        expect(containerInputText).toMatchSnapshot();
        expect(containerInputText).toHaveStyleRule('margin-bottom', '10px');
    });

    test('Should match InputText', () => {
        const inputText = renderer.create(<InputText />).toJSON();
        expect(inputText).toMatchSnapshot();
    });
    
    test('Should match H4', () => {
        const h = renderer.create(<H4 />).toJSON();
        expect(h).toMatchSnapshot();
        expect(h).toHaveStyleRule('text-align', 'center');
    });
});