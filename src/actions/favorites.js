const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const LOAD_FAVORITES = 'LOAD_FAVORITES';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

const addFavorite = (id, src, title, search) => {
	return { type: ADD_FAVORITE, id, src, title, search };
};
const toogleFavorite = (id, src, title, search) => {
	return { type: TOGGLE_FAVORITE, id, src, title, search };
};
const removeFavorite = id => {
	return { type: REMOVE_FAVORITE, id };
};
const loadFavorites = favorites => {
	return { type: LOAD_FAVORITES, favorites };
};

export default {
	types: {
		ADD_FAVORITE,
		TOGGLE_FAVORITE,
		REMOVE_FAVORITE,
		LOAD_FAVORITES
	},
	creators: {
		addFavorite,
		toogleFavorite,
		removeFavorite,
		loadFavorites
	}
};
