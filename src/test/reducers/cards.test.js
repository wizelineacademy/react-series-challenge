import React from 'react';
import cards from '../../reducers/cards';

describe('Cards reducer', () => {
	const initCardState = {
		cards: {},
		favorites: {},
	};
	const arrCards = [
		{
			id: 'QOvxr9pGvmZN0LKvqu',
			images: {
				original: { url: "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif" }
			},
			url: "https://giphy.com/gifs/ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
			isFavorite: false,
		},
		{
			id: 'uUkFJshdZAumBu0SMc',
			images: {
				original: { url: "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif" }
			},
			url: "https://giphy.com/gifs/ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
			isFavorite: false,
		}
	];
	const objCards = {
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
	it('should LOAD_CARDS', () => {
		const action = {
			type: 'LOAD_CARDS',
			payload: { cards: arrCards },
		};
		const modCardState = {...initCardState};
		modCardState.cards = objCards;
		expect(cards(initCardState,action)).toEqual(modCardState);
	});
	it('should LOAD_CARDS favs', () => {
		const newArrCards = [...arrCards];
		newArrCards[0].isFavorite = true;
		newArrCards[1].isFavorite = true;
		const action = {
			type: 'LOAD_CARDS',
			payload: { cards: newArrCards },
		};
		const newInitCardSate = {...initCardState};
		//newInitCardSate.favorites[ arrCards[0].id ] = {...arrCards[0],isFavorite:true};
		const modCardState = {...newInitCardSate};
		const newObjCards = {...objCards};
		newObjCards.QOvxr9pGvmZN0LKvqu = {...newObjCards.QOvxr9pGvmZN0LKvqu,isFavorite:true};
		newObjCards.uUkFJshdZAumBu0SMc = {...newObjCards.uUkFJshdZAumBu0SMc,isFavorite:true};
		modCardState.cards = newObjCards;
		expect(cards(newInitCardSate,action)).toEqual(modCardState);
	});
	it('should LOAD_CARDS in favs', () => {
		const newArrCards = [...arrCards];
		newArrCards[0].isFavorite = false;
		newArrCards[1].isFavorite = false;
		const action = {
			type: 'LOAD_CARDS',
			payload: { cards: newArrCards },
		};
		const newInitCardSate = {...initCardState};
		newInitCardSate.favorites[ arrCards[0].id ] = {...arrCards[0],isFavorite:true};
		newInitCardSate.favorites[ arrCards[1].id ] = {...arrCards[1],isFavorite:true};
		const modCardState = {...newInitCardSate};
		const newObjCards = {...objCards};
		newObjCards.QOvxr9pGvmZN0LKvqu = {...newObjCards.QOvxr9pGvmZN0LKvqu,isFavorite:true};
		newObjCards.uUkFJshdZAumBu0SMc = {...newObjCards.uUkFJshdZAumBu0SMc,isFavorite:true};
		modCardState.cards = newObjCards;
		expect(cards(newInitCardSate,action)).toEqual(modCardState);
	});
	it('should SET_FAVORITES', () => {
		const action = {
			type: 'SET_FAVORITES',
			payload: { cards: objCards },
		};
		const modCardState = {...initCardState};
		modCardState.favorites = objCards;
		expect(cards(initCardState,action)).toEqual(modCardState);
	});
	it('should LOAD_FAVORITES', () => {
		const action = {
			type: 'LOAD_FAVORITES',
			payload: { },
		};
		const modCardState = {...initCardState};
		expect(cards(initCardState,action)).toEqual(modCardState);
	});
	it('should ADD_REMOVE_FAVORITES', () => {
		const action = {
			type: 'ADD_REMOVE_FAVORITES',
			payload: { card: arrCards[0] },
		};
		const modCardState = {...initCardState};
		modCardState.card = arrCards[0];
		expect(cards(initCardState,action)).toEqual(modCardState);
	});
	it('should ADD_FAVORITES', () => {
		const action = {
			type: 'ADD_FAVORITES',
			payload: { card: arrCards[0] },
		};
		const modCardState = {...initCardState};
		modCardState.favorites[arrCards[0].id] = {...arrCards[0], isFavorite:true};
		modCardState.cards[arrCards[0].id] = {...arrCards[0], isFavorite:true};
		expect(cards(initCardState,action)).toEqual(modCardState);
	});
	it('should REMOVE_FAVORITES', () => {
		const action = {
			type: 'REMOVE_FAVORITES',
			payload: { card: arrCards[0] },
		};
		const newInitCardSate = {...initCardState};
		newInitCardSate.favorites[arrCards[0].id] = {...arrCards[0],isFavorite:true};
		newInitCardSate.cards[arrCards[0].id] = {...arrCards[0],isFavorite:true};
		const modCardState = {...newInitCardSate};
		modCardState.cards[arrCards[0].id] = {...arrCards[0],isFavorite:false};
		expect(cards(newInitCardSate,action)).toEqual(modCardState);
	});
	it('should DEFAULT', () => {
		const action = {
			type: 'default',
			payload: { },
		};
		const modCardState = {...initCardState};
		expect(cards(initCardState,action)).toEqual(modCardState);
	});
})