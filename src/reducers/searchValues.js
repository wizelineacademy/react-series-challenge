import searchActions from '../actions/searchValues'

const initialState = {
    greeting: "Hi",
};

const SearchReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case searchActions.types.SEARCH_FAVORITE_GIFS: {
            console.log("SEARCH_FAVORITE_GIFS");
            console.log(payload);
            state = {...initialState, value: 2};
            return state;
        }

        case searchActions.types.SEARCH_SPECIFIED_GIFS: {
            console.log("SEARCH_SPECIFIED_GIFS");
            return;
        }

        case searchActions.types.SEARCH_TRENDING: {
            console.log("SEARCH_TRENDING");
            return;
        }

        default: 
            return state;
    }
}

export default SearchReducer;