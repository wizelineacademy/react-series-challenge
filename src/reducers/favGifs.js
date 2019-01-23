import {ADD_ITEM, SEARCH_FAV_GIFS} from "../actions/favGifs";
const initialState = {
    searchFavs:{},
    favs:{}
};

const favGifs = (state =initialState, action) => {
    switch (action.type) {
        //adds the item to State favGifs[favs]
        case ADD_ITEM:{
            const newState = { ...state };
            if(newState.favs[action.payload.id]){
                delete(newState.favs[action.payload.id])
            }else {
                newState.favs[action.payload.id] = action.payload;
            }
            return newState;
        }
        //Search using a string and adds to favGifs[searchFavs]
        case  SEARCH_FAV_GIFS:{
            const strSearch = action.payload;
            const newState = { ...state };
            newState['searchFavs'] = {};
            Object.keys(newState['favs']).forEach((gif) => {
                const { title } = newState['favs'][gif];
                if (title.includes(strSearch)) {
                    newState['searchFavs'][gif] = newState['favs'][gif];
                }
            });
            return newState;
        }

        default:
            return state;
    }
}

export default favGifs;