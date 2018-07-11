import React from 'react';
import { ContentGif, Icon, Image, ImageDescription } from '../../styles/Image.style';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Image styled', () => {

    test('Should match ContentGif', () => {
        const contentGif = renderer.create(<ContentGif/>).toJSON();
        expect(contentGif).toMatchSnapshot();
        expect(contentGif).toHaveStyleRule('float', 'left');
        expect(contentGif).toHaveStyleRule('background-color', '#edf0f5');
    });

    test('Should match ContentGif favorite', () => {
        const contentGif = renderer.create(<ContentGif favorite/>).toJSON();
        expect(contentGif).toMatchSnapshot();
        expect(contentGif).toHaveStyleRule('float', 'left');
        expect(contentGif).toHaveStyleRule('background-color', '#b5c4de');
    });

    test('Should match Icon', () => {
        const icon = renderer.create(<Icon />).toJSON();
        expect(icon).toMatchSnapshot();
        expect(icon).toHaveStyleRule('color', '#e7f52b');
    });

    test('Should match Image', () => {
        const image = renderer.create(<Image />).toJSON();
        expect(image).toMatchSnapshot();
        expect(image).toHaveStyleRule('width', '100%');
    });

    test('Should match ImageDescription', () => {
        const description = renderer.create(<ImageDescription />).toJSON();
        expect(description).toMatchSnapshot();
        expect(description).toHaveStyleRule('font-family', 'sans-serif');
    });
});