
// Action types:
export const ADD_ITEM    = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const LOAD_FAV_GIFS = 'LOAD_FAV_GIFS';
export const SEARCH_FAV_GIFS = 'SEARCH_FAV_GIFS';

//Action creators
export const addItem = (payload) => ({
    type : ADD_ITEM,
    payload
});

export const deleteItem = (payload) => ({
    type : DELETE_ITEM,
    payload
});

export const loadFavGifs = (payload) => ({
   type : LOAD_FAV_GIFS,
   payload
});

export const searchFavGifs = (payload) => ({
    type : SEARCH_FAV_GIFS,
    payload
});