const LOAD_FAVORITES = 'LOAD_FAVORITES';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

const toggleFavorite = (id, src, title, search) => {
	return { type: TOGGLE_FAVORITE, id, src, title, search };
};
const loadFavorites = favorites => {
	return { type: LOAD_FAVORITES, favorites };
};

export default {
	types: {
		TOGGLE_FAVORITE,
		LOAD_FAVORITES
	},
	creators: {
		toggleFavorite,
		loadFavorites
	}
};
