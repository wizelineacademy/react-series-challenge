import {ADD_ITEM} from '../actions/favGifs';
export const LOCAL_STORAGE_FAVS = 'favGifs';

const addToStorage = (id) => {
    let jsonFavs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVS));
    if(jsonFavs){
        if(jsonFavs[id]){
         delete jsonFavs[id];
        }else {
            jsonFavs[id] = id;
        }
    }else {
        jsonFavs = {[id] : id}
    }
    localStorage.setItem(LOCAL_STORAGE_FAVS,JSON.stringify(jsonFavs));
}
const favStorage = (store) => (next) => (action) => {

    const {type} = action;
    if(type === ADD_ITEM){
        addToStorage(action.payload.id);
    }
    return next(action);
}
export default favStorage;