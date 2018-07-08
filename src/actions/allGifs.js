// Action types:
export const LOAD_All_GIFS = 'LOAD_All_GIFS';

//Action Creators
export const loadAllGifs = (payload) => ({
    type : LOAD_All_GIFS,
    payload
})
