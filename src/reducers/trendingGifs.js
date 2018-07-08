import trendingGifsActions from '../actions/trendingGifs'

const initialState = {
    trendingGifs:[],
    searchGifs:[],
    query:'',
    favs:[]
}

const trendingGifsReducer = (state = initialState, action) => {
    const { type, payload} = action
    switch (type) {
        case trendingGifsActions.types.TRENDING_GIFS_FETCHED:{
            const newState = { searchGifs:state.searchGifs, trendingGifs:payload.data.data, query:state.query, favs:state.favs }
            return newState
        }
        case trendingGifsActions.types.SEARCH_GIFS_GET:{
            const newState = { searchGifs: state.searchGifs, trendingGifs:state.trendingGifs, query:payload, favs:state.favs }
            return newState
        }
        
        case trendingGifsActions.types.SEARCH_GIFS_FETCHED:{
            const newState = { searchGifs: payload.data.data, trendingGifs:state.trendingGifs, query:state.query, favs:state.favs }
            return newState
        }
        case trendingGifsActions.types.ADD_FAV:{
            state.favs.push(payload)
            const newState = {  searchGifs: state.searchGifs, trendingGifs:state.trendingGifs, query:state.query, favs:state.favs }
            return newState
        }
        case trendingGifsActions.types.REMOVE_FAV:{
            let forDelete = [payload]
            state.favs = state.favs.filter( item => !forDelete.includes(item))
            const newState = {  searchGifs: state.searchGifs, trendingGifs:state.trendingGifs, query:state.query, favs:state.favs }
            return newState
        }
        default:
            return state
    }
}

export default trendingGifsReducer