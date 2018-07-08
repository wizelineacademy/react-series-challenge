import trendingGifsActions from '../actions/trendingGifs'

const initialState = {
    trendingGifs:[],
    searchGifs:[],
    query:''
}

const trendingGifsReducer = (state = initialState, action) => {
    const { type, payload} = action
    switch (type) {
        case trendingGifsActions.types.TRENDING_GIFS_FETCHED:{
            const newState = { searchGifs: [], trendingGifs:payload.data.data, query:state.query }
            return newState
        }
        case trendingGifsActions.types.SEARCH_GIFS_GET:{
            const newState = { searchGifs: [], trendingGifs:[], query:payload }
            return newState
        }
        
        case trendingGifsActions.types.SEARCH_GIFS_FETCHED:{
            const newState = { searchGifs: payload.data.data, trendingGifs:[], query:state.query }
            return newState
        }
        default:
            return state
    }
}

export default trendingGifsReducer