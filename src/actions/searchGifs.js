// Action types:
export const LOAD_SEARCH_GIFS = 'LOAD_SEARCH_GIFS';
export const FETCH_SEARCH_GIFS = 'FETCH_SEARCH_GIFS';

//Action creators
export const loadSearchGifs = (payload) => {
    return({
    type : LOAD_SEARCH_GIFS,
    payload
})}

export const fetchSearchGifs = (payload) =>{
    console.log(FETCH_SEARCH_GIFS);
    console.log(payload)
    return ({
        type : FETCH_SEARCH_GIFS,
        payload
    })
}