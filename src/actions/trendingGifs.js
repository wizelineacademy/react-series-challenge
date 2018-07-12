import { createAction } from 'redux-actions';

const TRENDING_GIFS_FETCHED = 'TRENDING_GIFS_FETCHED'
const TRENDING_GIFS_GET = 'TRENDING_GIFS_GET'

const SEARCH_GIFS_FETCHED = 'SEARCH_GIFS_FETCHED'
const SEARCH_GIFS_GET = 'SEARCH_GIFS_GET'

const ADD_FAV = 'ADD_FAV'
const REMOVE_FAV = 'REMOVE_FAV'
const SEARCH_GIFS_FAV = 'SEARCH_GIFS_FAV'
const GET_GIFS_FAV = 'GET_GIFS_FAV'


const fetchedTrendingGifs = createAction(TRENDING_GIFS_FETCHED)
const getTrendingGifs = (payload = { }) => ({type:TRENDING_GIFS_GET, payload})

//const fetchedSearchGifs = createAction(SEARCH_GIFS_FETCHED)
const fetchedSearchGifs = (payload = { }) => ({type:SEARCH_GIFS_FETCHED, payload})
const getSearchGifs = (payload = { }) => ({type:SEARCH_GIFS_GET, payload})

const addFav = (payload = { }) => ({type:ADD_FAV, payload})
const removeFav = (payload = { }) => ({type:REMOVE_FAV, payload})
const searchFav = (payload = { }) => ({type:SEARCH_GIFS_FAV, payload})

export default{
    types:{
        TRENDING_GIFS_FETCHED,
        TRENDING_GIFS_GET,
        SEARCH_GIFS_FETCHED,
        SEARCH_GIFS_GET,
        ADD_FAV,
        REMOVE_FAV,
        SEARCH_GIFS_FAV,
        GET_GIFS_FAV
    },
    creators:{
        fetchedTrendingGifs,
        getTrendingGifs,
        fetchedSearchGifs,
        getSearchGifs,
        addFav,
        removeFav,
        searchFav
    }
}