import gifs from '../actions/gifs'


const initialState = {
    fetching: true,
    gifs: [],
    query: "",
    error: null,
    likeGifs: []
}


const giphyReducer = (state = initialState, action) => {
    const { type } = action
    const { types } = gifs
    const { GET_GIFS_COMPLETED, GET_GIFS_FAILED, GET_GIFS_REQUESTED, LIKE_GIF, UNLIKE_GIF,
        
        SEARCH_GIF_REQUESTED,
        GET_GIFS_LOCAL_REQUESTED,
         SET_QUERY, GET_ONE_GIF } = types


    switch (type) {
        case GET_GIFS_REQUESTED:
            return {
                ...state,
                fetching: true
            }
        case GET_GIFS_COMPLETED:
            let gifsT = []
            
            let actual_like_gifs = window.sessionStorage.getItem("likeGifs")
            if(actual_like_gifs === undefined || actual_like_gifs === null) actual_like_gifs = []
            else {
                actual_like_gifs = JSON.parse(actual_like_gifs)
            }
            
            
            if (actual_like_gifs.length !== 0) {
                action.gifs.forEach((g) => {
                    actual_like_gifs.forEach((a) => {
                        if (g.id === a.id) {
                            gifsT = [...gifsT.filter((f) => { return f.id !== g.id }),
                            Object.assign({}, g, { isFavorite: true })]

                        }
                        else if (gifsT.filter((f) => { return f.id === g.id }).length === 0) {
                            gifsT = [...gifsT,
                            Object.assign({}, g, { isFavorite: false })]
                        }



                    })

                })

            }
            else {
                gifsT = action.gifs
            }
            return {
                ...state,
                fetching: false,
                gifs: gifsT
            }
        case GET_GIFS_FAILED:
            return {
                ...state,
                fetching: false,
                gifs:[],
                error: action.error
            }
        case SEARCH_GIF_REQUESTED:
            return {
                ...state,
                fetching: true,

            }
        
        case LIKE_GIF:
            const gif = { ...action.gif, isFavorite: true }
            let local_favs = window.sessionStorage.getItem("likeGifs")
            if(local_favs === undefined || local_favs === null) local_favs = []
            else{
                local_favs = JSON.parse(local_favs)
            }
            let like_gifs = [
                ...local_favs,
                gif
            ];

            window.sessionStorage.setItem("likeGifs", JSON.stringify(like_gifs))
            const fgifs = [...state.gifs]
            fgifs[action.gif.index] = gif
            return {
                ...state,
                likeGifs: like_gifs,
                gifs: fgifs
            }
        case UNLIKE_GIF:
            let ssdata = window.sessionStorage.getItem('likeGifs')
            let unlike_like_gifs_final = []
            if(ssdata === undefined || ssdata === null) ssdata = []
            if(ssdata.length>0){
                 unlike_like_gifs_final = [...JSON.parse(ssdata).filter((g) => {
                    return g.id !== action.gif.id
                })]
            }
           
            window.sessionStorage.setItem("likeGifs", JSON.stringify(unlike_like_gifs_final))
            const ugifs = [...state.gifs]
            ugifs[action.gif.index] = { ...action.gif, isFavorite: false }
            return {
                ...state,
                
                gifs: ugifs
            }
        case GET_GIFS_LOCAL_REQUESTED:
            return {
                ...state,
                fetching: true
            }
        
        case SET_QUERY:
            return {
                ...state,
                query: action.query
            }
        case GET_ONE_GIF:
            return {
                ...state,
                fetching: true
            }
        default:
            return state
    }
}

export default giphyReducer