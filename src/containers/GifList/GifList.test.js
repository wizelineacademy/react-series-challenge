import React, { Component } from 'react';
import { shallow } from 'enzyme';

import { GifList } from './GifList';
import GifCard from '../../components/GifCard/GifCard';

describe('GifList', () => {
	it('should render <GifCard /> when receiving gifs', () => {
		const wrapper = shallow(<GifList />);
		wrapper.setProps({
			gifsFetch: {
				gifsList: [{ images: { fixed_height: { url: 'url' } }, id: '1' }]
			}
		});
		expect(wrapper.find(GifCard)).toHaveLength(1);
	});
});
