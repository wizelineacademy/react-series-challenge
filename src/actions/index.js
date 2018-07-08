// Action types:
export const ADD_ITEM    = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SEARCH_GIFS = 'SEARCH_GIFS';
export const ALL_GIFS    = 'ALL_GIFS';

//Action creators
export const addItem = (payload) => ({
    type : ADD_ITEM,
    payload
});

export const deleteItem = (payload) => ({
    type : DELETE_ITEM,
    payload
})

export const searchGifs = (payload) => ({
    type : SEARCH_GIFS,
    payload
})
export const allGifs = (payload) => ({
    type : All_GIFS,
    payload
})

