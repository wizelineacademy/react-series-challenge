import favoritesActions from '../actions/favorites';

const initialState = {
    list: null,
    fetching: false,
    success: false
}

const favorites = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case favoritesActions.types.GET_FAVORITE_START:
        case favoritesActions.types.ADD_FAVORITE_START:
        case favoritesActions.types.REMOVE_FAVORITE_START:
            newState = { ...initialState };
            newState.fetching = true;
            newState.success = true;
            return newState;
        case favoritesActions.types.GET_FAVORITE_COMPLETE:
        case favoritesActions.types.ADD_FAVORITE_COMPLETE:
        case favoritesActions.types.REMOVE_FAVORITE_COMPLETE:
            newState = { ...state };
            newState.fetching = false;
            newState.list = {
                data: action.payload
            };
            newState.success = true;
            return newState;
        case favoritesActions.types.GET_FAVORITE_ERROR:
        case favoritesActions.types.ADD_FAVORITE_ERROR:
        case favoritesActions.types.REMOVE_FAVORITE_ERROR:
            newState = { ...initialState }
            return newState;
        default:
            return state;
    }
}

export default favorites;