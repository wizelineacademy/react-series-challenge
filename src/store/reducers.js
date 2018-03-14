const defaultState = {
  trendingGifs: [],
  favoriteGifs: [],
  error: '',
  loading: false,
  singleGif: null
}

const counter = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOADING_START':
      return { ...state, loading: true }
    case 'LOADING_END':
      return { ...state, loading: false }

    case 'FETCH_SUCCEEDED':
      const trendingGifs = action.trendingGifs.data
      return { ...state, trendingGifs };

    case 'FETCH_FAILED':
      return { ...state, error: action.payload.message }
    case 'FETCHED_SINGLE':
      return { ...state, singleGif: action.singleGif.data };
    case 'FETCHED_SEARCH':
      return { ...state, trendingGifs: action.searchGifs.data };

    case 'FETCH_FAVORITES':
      let fetchedGifsFromStorage = JSON.parse(localStorage.getItem("favorites"))
      if (!fetchedGifsFromStorage) {
        // no favorites found
        return {...state}
      }
      return { ...state, favoriteGifs: fetchedGifsFromStorage }
    case 'SAVE_FAVORITE':
      let favoriteGifs = state.favoriteGifs.slice(0)
      // filter only needed props
      favoriteGifs.unshift({
        id: action.gifData.id,
        slug: action.gifData.slug,
        images: {
          fixed_width: action.gifData.images.fixed_width
        }
      })
      localStorage.setItem("favorites", JSON.stringify(favoriteGifs))
      return { ...state, favoriteGifs }
    case 'REMOVE_FAVORITE':
      const newFavoriteGifs = state.favoriteGifs.filter(gif => gif.id !== action.gifId)
      localStorage.setItem("favorites", JSON.stringify(newFavoriteGifs))
      return { ...state, favoriteGifs: newFavoriteGifs }

    default:
       return state;
   }
};
export default counter
