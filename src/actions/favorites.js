const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const LOAD_FAVORITES = 'LOAD_FAVORITES';

const addFavorite = (id, src, title, search) => {
	return { type: ADD_FAVORITE, id, src, title, search };
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
		REMOVE_FAVORITE,
		LOAD_FAVORITES
	},
	creators: {
		addFavorite,
		removeFavorite,
		loadFavorites
	}
};
