import searchActions from '../actions/searchValues'

const initialState = {
    searchedValue: "trendy",
    gifs: [],
    favoritedImages: [],
};

const SearchReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case searchActions.types.ADD_REMOVE_GIF: {
            let newState = {...state};

            if(newState.favoritedImages !== undefined && newState.favoritedImages !== null && newState.favoritedImages.length > 0){
                for(let a = 0; a <= newState.favoritedImages.length - 1; a++){
                    if(payload.id === newState.favoritedImages[a].id){          
                        return {...state, favoritedImages: [...state.favoritedImages.slice(0, a), ...state.favoritedImages.slice(a+1)]};
                    }
                }
            }
            return {...state, favoritedImages: state.favoritedImages.concat(payload)};
        }

        case searchActions.types.SEARCH_SPECIFIED_GIFS: {
            return {...state, gifs: payload.data.data};
        }

        case searchActions.types.GET_TRENDING: {
            let newState = {...state, gifs: payload.data.data}
            return newState;
        }

        case searchActions.types.SEARCH_UPDATE_VALUE: {
            return {...state, searchedValue: payload.searchValue};
        }

        default: 
            return state;
    }
}

export default SearchReducer;