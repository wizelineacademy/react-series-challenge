import React from 'react';
import { Provider } from 'react-redux';
import SearchGif from '../../../components/SearchGif/Searchgif';
import { SearchLabel, SearchInput } from '../../../components/SearchGif/SearchGif.styled';
import { shallow } from 'enzyme';
import store from "../../../store";
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import 'jest-styled-components';

describe('SearchGif', () => {

    it('should render without problems', () => {
        const wrapper = shallow(
            <Router>
                <Provider store={store}>
                    <SearchGif />
                </Provider>
            </Router>
        );

        wrapper.setProps({
            loadSearchGifs: jest.fn(),
            filterFavoriteGifs: jest.fn(),
        });

        expect(wrapper).toMatchSnapshot();
    });

    it('should not be problems with styled components', () => {
        const searchLabel = shallow(<SearchLabel />);
        expect(searchLabel).toHaveStyleRule('display', 'block');

        const searchInput = shallow(<SearchInput />);
        expect(searchInput).toHaveStyleRule('height', '25px');
    });

});