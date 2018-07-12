import React from 'react';
import { shallow, mount } from 'enzyme';
import favCompoent,{ComponentsFavorites} from '../../../components/FavoritesComponent';
import cardsActions from '../../../actions/cards';
import searchActions from '../../../actions/search';
import store from '../../../store';

describe('Favorites Component', () => {
	const cards = {
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
	};
	it('should render', () => {
		const fav = shallow(<favCompoent store={store} cards={cards} searchFavs={searchActions.creators.searchFavs} loadFavorites={cardsActions.creators.loadFavorites} />);
		expect(fav).toMatchSnapshot();
	});
	it('should didMount', () => {
		const spy = jest.spyOn(ComponentsFavorites.prototype, 'componentDidMount');
		const myMockFn = jest.fn(() => true );
		const wrappCards = {cards: {...cards} };
		mount(<ComponentsFavorites store={store} cards={wrappCards} searchFavs={searchActions.creators.searchFavs} loadFavorites={myMockFn} />);
		expect(spy).toHaveBeenCalled();
	});
});