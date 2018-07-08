
// Action types:
export const ADD_ITEM    = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SHOW_FAVS = 'DELETE_ITEM';

//Action creators
export const addItem = (payload) => ({
    type : ADD_ITEM,
    payload
});

export const deleteItem = (payload) => ({
    type : DELETE_ITEM,
    payload
});

export const showFavs = (payload) => ({
   type : SHOW_FAVS,
   payload
});