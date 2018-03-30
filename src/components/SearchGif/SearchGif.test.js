import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { mount } from 'enzyme';
import SearchGif, { searchGif } from './searchGif';
import configureStore from 'redux-mock-store';
import { SearchBar } from '../../style/style';

const initialState = {
	gifsFetch: {
		gifsList: [],
		search: '',
		fetching: false,
		trending: true,
		searching: false,
		error: false,
		errorInfo: ''
	},
	user: { favorites: {} }
};

describe('searchGif', () => {
	let store;
	const mockStore = configureStore();
	it('should match Snapshot', () => {
		const wrapper = mount(
			<searchGif>
				<div />
			</searchGif>
		);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	it('with store, change when SearchBar empty, should match Snapshot', () => {
		store = mockStore(initialState);
		const wrapper = mount(
			<SearchGif store={store}>
				<div />
			</SearchGif>
		);
		wrapper.find(SearchBar).simulate('change');
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	it('with store, change when SearchBar is not empty, should match Snapshot', () => {
		store = mockStore(initialState);
		const wrapper = mount(
			<SearchGif store={store}>
				<div />
			</SearchGif>
		);
		wrapper.find(SearchBar).simulate('change', { target: { value: 'Hello' } });
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
