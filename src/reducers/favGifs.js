import {ADD_ITEM, DELETE_ITEM,LOAD_FAV_GIFS} from "../actions/favGifs";

const favGifs = (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:{
            //console.log('Adding gif');
            const newState = { ...state };
            if(newState[action.payload.id]){
                delete(newState[action.payload.id])
            }else {
                newState[action.payload.id] = action.payload;
                //localStorage.setItem(action.payload.id,action.payload.id);
                console.log(newState);
            }
            console.log('State addReducer',newState);
            return newState;
        }

        default:
            return state;
    }
}

export default favGifs;