import * as React from 'react';
import 'jest-enzyme';
import 'jest-styled-components'
import { shallow, mount } from 'enzyme';
import FavButton from '../components/presentational/FavButton';

describe('FavButton', () => {
    it('renders withouth crashing', () => {
        shallow(<FavButton />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<FavButton />)
        expect(wrapper).toMatchSnapshot()
    });

    describe('heart icon', () => {
        it('contains a white heart', () => {
            const wrapper = mount(<FavButton />);
            expect(wrapper).toHaveText("♥");
            expect(wrapper).toHaveStyleRule('color', '#FFF');
        });
        it('contains a red heart when active', () => {
            const wrapper = mount(<FavButton active />);
            expect(wrapper).not.toHaveStyleRule('color', '#FFF');
        });
    });
});