import React from 'react';
import cardsActions from '../../actions/cards';

describe('Card Actions', () => {
	const payload = { };
	test('should return loadCards action', () => {
		expect(cardsActions.creators.loadCards(payload)).toMatchSnapshot();
	});
	test('should return loadCards action', () => {
		expect(cardsActions.creators.loadCards(payload)).toMatchSnapshot();
	});
	test('should return addFavorites action', () => {
		expect(cardsActions.creators.addFavorites(payload)).toMatchSnapshot();
	});
	test('should return removeFavorites action', () => {
		expect(cardsActions.creators.removeFavorites(payload)).toMatchSnapshot();
	});
	test('should return setFavorites action', () => {
		expect(cardsActions.creators.setFavorites(payload)).toMatchSnapshot();
	});
});