import favoriteActions from '../actions/favorites';

const { SEARCH_FAVORITE, IS_SEARCHING_FAVORITE } = favoriteActions.types;
const { searchFavorite } = favoriteActions.creators;

const dispatchFavorite = (obj, dispatch) =>{
    dispatch(searchFavorite({ ...obj }))
}

const SearchFavorite = (store) => (next) => (action) => {
    const { type, payload } = action;

    switch(type){
        case IS_SEARCHING_FAVORITE:
            const { term, newObj } = payload;
            let response = {}
            if (term === ""){
                response={
                    isSearching: false,
                    favoritesMatched: {},
                }
            }else{
                response={
                    isSearching: true,
                    favoritesMatched: newObj,
                }
            }

            dispatchFavorite(response, store.dispatch);

        default: 
            break;
    }

  return next(action);
};

export default SearchFavorite;
