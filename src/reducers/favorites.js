import favoriteActions from '../actions/favorites';

const initalState = {
  gifs: {},
  filter: ''
};

const favoriteReducer = (state = initalState, action) => {
    const { type } = action;
    let id;
    
    switch (type) {
        case favoriteActions.types.FAVORITE_TOGGLE:
            id = action.payload.id;
            var gifs = {...state.gifs};
            if (state.gifs[id])
            {
                delete gifs[id];
            }
            else
            {
                gifs[id] = action.payload;
            }
            
            return {
                ...state,
                gifs: gifs
            };
        case favoriteActions.types.FAVORITE_FILTER:
            var filter = action.filter;
            return {
                ...state,
                filter
            };
        default:
            return state;
    }
};

export default favoriteReducer;