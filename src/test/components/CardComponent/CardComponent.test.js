import React from 'react';
import { shallow } from 'enzyme';
import CardComponent from '../../../components/CardComponent';

describe('Card Component', () => {
	const card = {
		images: {
			original: { url: "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif" }
		},
		url: "https://giphy.com/gifs/ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
		isFavorite: false,
	};
	test('Card Component Shallow', () => {
		const cardComp = shallow(<CardComponent card={card} />);
		expect(cardComp).toMatchSnapshot();
	});
});