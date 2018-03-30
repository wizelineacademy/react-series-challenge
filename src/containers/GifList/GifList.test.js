import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import GifList from './GifList';

const initialState = {
	gifsFetch: {
		gifsList: [
			{
				id: 'gif.id',
				title: 'gif.title',
				src: 'gif.images.fixed_height.url'
			}
		],
		search: 'abc',
		fetching: false,
		trending: true,
		searching: false,
		error: false,
		errorInfo: ''
	},
	user: { favorites: {} }
};
describe('GifList', () => {
	let store;
	const mockStore = configureStore();
	it('should match Snapshot', () => {
		store = mockStore(initialState);
		const wrapper = shallow(<GifList page="Favorites" store={store} />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
