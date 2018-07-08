import { createAction } from 'redux-actions';

const TRENDING_GIFS_FETCHED = 'TRENDING_GIFS_FETCHED'
const TRENDING_GIFS_GET = 'TRENDING_GIFS_GET'

const fetchedTrendingGifs = createAction(TRENDING_GIFS_FETCHED)
const getTrendingGifs = (payload = { }) => ({type:TRENDING_GIFS_GET, payload})

export default{
    types:{
        TRENDING_GIFS_FETCHED,
        TRENDING_GIFS_GET
    },
    creators:{
        fetchedTrendingGifs,
        getTrendingGifs
    }
}