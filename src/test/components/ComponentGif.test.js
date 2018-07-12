import React from 'react';
import { shallow } from 'enzyme';
import ComponentGif from '../../components/ComponentGif';
import { Icon, Image, ImageDescription, } from '../../styles/Image.style';

describe('Component Gif', () => {
    let Wrapper;

    beforeEach(() => {
        Wrapper = shallow(ComponentGif('0101010', 'my_gif', { url: 'http://www.xyzyz' }, true, () => { }));
    });

    test('Should match Snapshot', () => {
        expect(Wrapper).toMatchSnapshot();
    });

    test('Should render Icon', () => {
        expect(Wrapper.find(Icon)).toHaveLength(1);
    });

    test('Should render Image', () => {
        expect(Wrapper.find(Image)).toHaveLength(1);
    });

    test('Should render ImageDescription', () => {
        expect(Wrapper.find(ImageDescription)).toHaveLength(1);
    });
});