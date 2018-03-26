const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const addFavorite = id => {
	return { type: ADD_FAVORITE, id };
};
const removeFavorite = id => {
	return { type: REMOVE_FAVORITE, id };
};

export default {
	types: {
		ADD_FAVORITE,
		REMOVE_FAVORITE
	},
	creators: {
		addFavorite,
		removeFavorite
	}
};
