import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Image, ImageCard, Border } from './style';

describe('styled componets', () => {
	it('Image should match Snapshot', () => {
		const wrapper = mount(<Image />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	it('Image should match Snapshot', () => {
		const wrapper = mount(<Image big={true} />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	it('ImageCard should match Snapshot', () => {
		const wrapper = mount(<ImageCard />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	it('ImageCard should match Snapshot', () => {
		const wrapper = mount(<ImageCard big={true} />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	it('Border should match Snapshot', () => {
		const wrapper = mount(<Border />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	it('Border should match Snapshot', () => {
		const wrapper = mount(<Border home={true} />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
