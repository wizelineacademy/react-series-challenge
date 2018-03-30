import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import GifCard, { gifCard } from './GifCard';
import configureStore from 'redux-mock-store';
import { FavButton, Image } from '../../style/style';

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

describe('gifCard', () => {
	let wrapper;
	let store;
	const mockStore = configureStore();
	beforeEach(() => {
		wrapper = shallow(<gifCard />);
	});
	it('should be match Snapshot', () => {
		const wrapper = mount(<gifCard />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	it('should render the component', () => {
		store = mockStore(initialState);
		wrapper = shallow(<GifCard store={store} />);
		expect(wrapper.length).toEqual(1);
	});
});

describe('GifCard big', () => {
	let wrapper;
	let store;
	const mockStore = configureStore();
	beforeEach(() => {
		initialState.user.favorites['id'] = {};
		store = mockStore(initialState);
		// wrapper = shallow(
		// 	<GifCard
		// 		src={'src'}
		// 		gifTitle={'gifTitle'}
		// 		id={'id'}
		// 		goBack={'pgoBack'}
		// 		big
		// 		store={store}
		// 	/>
		// );
	});
	it('should render the GifCard with favorite property', () => {
		expect(wrapper.find(gifCard).prop('favorite')).toEqual(true);
	});
	it('should be match Snapshot', () => {
		const wrapper = mount(
			<GifCard
				src={'src'}
				gifTitle={'gifTitle'}
				id={'id'}
				goBack={'pgoBack'}
				big
				store={store}
			/>
		);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	it('should click and remove favorite and match Snapshot', () => {
		const wrapper = mount(
			<GifCard
				src={'src'}
				gifTitle={'gifTitle'}
				id={'id'}
				goBack={'pgoBack'}
				big
				store={store}
			/>
		);
		wrapper.find(FavButton).simulate('click');
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	it('should click and add favorite and match Snapshot', () => {
		initialState.user.favorites = {};
		const wrapper = mount(
			<GifCard
				src={'src'}
				gifTitle={'gifTitle'}
				id={'id'}
				goBack={'pgoBack'}
				big
				store={store}
			/>
		);
		wrapper.find(FavButton).simulate('click');
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	it('should click Image goBack() and match Snapshot', () => {
		const wrapper = mount(
			<GifCard
				src={'src'}
				gifTitle={'gifTitle'}
				id={'id'}
				goBack={'pgoBack'}
				big
				store={store}
			/>
		);
		wrapper.find(Image).simulate('click');
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
