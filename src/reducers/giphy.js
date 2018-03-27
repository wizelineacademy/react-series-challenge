import gifs from '../actions/gifs'


const initialState = {
    fetching:false,
    gifs:[],
    error: null,
    likeGifs:[]
}


const giphyReducer = (state = initialState, action)=>{
    const { type } = action
    const { types } = gifs
    const { GET_GIFS_COMPLETED, GET_GIFS_FAILED, GET_GIFS_REQUESTED,LIKE_GIF, UNLIKE_GIF,
    SEARCH_GIF_COMPLETED, SEARCH_GIF_FAILED, SEARCH_GIF_REQUESTED } = types


    switch(type){
        case GET_GIFS_REQUESTED:
            return {
                ...state,
                fetching: true
            }
        case GET_GIFS_COMPLETED:
        let gifsT = []
        const actual_like_gifs = window.sessionStorage.getItem("likeGifs") || []
        if(actual_like_gifs.length!==0){
             gifsT =  actual_like_gifs.map((g)=>{
                return action.gifs.find((f)=>{
                    return f.id === g.id
                }).isFavorite = true
            })
        }
        else{
            gifsT = action.gifs
        }
      
        console.log(gifsT)
      
        
            return {
                ...state,
                fetching:false,
                gifs:gifsT
            }
        case GET_GIFS_FAILED:
        return {
            ...state,
            fetching:false,
            error:action.error
        }
        case SEARCH_GIF_REQUESTED:
            return {
                ...state,
                fetching:true,

            }
        case SEARCH_GIF_COMPLETED:
        const actual_like_gifs_search = window.sessionStorage.getItem("likeGifs")
        const gifs_search = Object.entries(Object.assign({}, ...action.gifss,...actual_like_gifs_search)).map(([key, value]) => ({[key]:value}));
            return {
                ...state,
                fetching:false,
                gifs: gifs_search,
            }
        case SEARCH_GIF_FAILED:
            return {
                ...state,
                fetching:false,
                error: action.error
            }
        case LIKE_GIF:
            const gif = {...action.gif,isFavorite:true}
            let like_gifs = [
                ...state.likeGifs,
                gif
            ];
            window.sessionStorage.setItem("likeGifs",like_gifs)
            const gifsFinal = Object.entries(Object.assign({}, ...state.gifs,...like_gifs)).map(([key, value]) => ({[key]:value}));
            return {
                ...state,
                likeGifs:like_gifs,
                gifs:gifsFinal
            }
        case UNLIKE_GIF:
            let actual_like_gifs_final = state.likeGifs.filter((g)=>{
                return g.id !== action.gif.id
            })
            window.sessionStorage.setItem("likeGifs",actual_like_gifs)
            const Gifs = Object.entries(Object.assign({}, ...state.gifs,...actual_like_gifs_final)).map(([key, value]) => ({[key]:value}));
            return {
                ...state,
                likeGifs:actual_like_gifs,
                gifs:Gifs
            }
        default:
            return state
    }
}

export default giphyReducer