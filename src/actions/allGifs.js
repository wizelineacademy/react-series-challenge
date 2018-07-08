// Action types:
export const LOAD_All_GIFS = 'LOAD_All_GIFS';
export const FETCH_ALL_GIFS = 'FETCH_ALL_GIFS';

//Action Creators
export const loadAllGifs = (payload) => ({
    type : LOAD_All_GIFS,
    payload
})

export const fetchAllGifs = (payload) =>{
    console.log(FETCH_ALL_GIFS);
    return ({
        type : FETCH_ALL_GIFS,
        payload
    })
}
