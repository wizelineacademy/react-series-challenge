import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../../../components/CardsListComponent';

describe('Card List Component', () => {
	const data = {cards:{
		'QOvxr9pGvmZN0LKvqu': {
			id: 'QOvxr9pGvmZN0LKvqu',
			images: {
				original: { url: "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif" }
			},
			url: "https://giphy.com/gifs/ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
			isFavorite: false,
		},
		'uUkFJshdZAumBu0SMc': {
			id: 'uUkFJshdZAumBu0SMc',
			images: {
				original: { url: "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif" }
			},
			url: "https://giphy.com/gifs/ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
			isFavorite: false,
		}
	}};
	test('Shallow', () => {
		const cardList = shallow(<CardList cards={data} />);
		expect(cardList).toMatchSnapshot();
	});
});