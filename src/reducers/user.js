import actions from '../actions/favorites';

const initialState = {
	favorites: []
};

const userReducer = (state = initialState, action) => {
	const { type } = action;
	const favorites = [...state.favorites];
	switch (type) {
		case actions.types.ADD_FAVORITE:
			favorites.push(action.id);
			return {
				...state,
				favorites
			};
		case actions.types.REMOVE_FAVORITE:
			const index = favorites.indexOf(action.id);
			favorites.splice(index, 1);
			return {
				...state,
				favorites
			};
		default:
			return state;
	}
};

export default userReducer;
