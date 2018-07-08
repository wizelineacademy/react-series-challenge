import trendingGifsActions from '../actions/trendingGifs'

const initialState = {
    trendingGifs:[]
}

const trendingGifsReducer = (state = initialState, action) => {
    const { type, payload} = action

    switch (type) {
        case trendingGifsActions.types.TRENDING_GIFS_FETCHED:
            const newState = { trendingGifs: payload.data.data }
            return newState
        default:
            return state
    }
}

export default trendingGifsReducer