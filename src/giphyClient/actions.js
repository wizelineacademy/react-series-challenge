export const REQUEST_SEARCH_GIFS = 'REQUEST_SEARCH_GIF'
export const RESPONSE_SEARCH_GIFS = 'RESPONSE_SEARCH_GIF'
// export const REQUEST_TRENDING_GIFS = 'REQUEST_TRENDING_GIFS'
// export const RESPONSE_TRENDING_GIFS = 'REQUEST_TRENDING_GIFS'

export const requestSearchGifs = () => ({type:REQUEST_SEARCH_GIFS})
export const responseSearchGifs = data => ({type:RESPONSE_SEARCH_GIFS, data})
// export const requestTrendingGifs = () => ({type:REQUEST_TRENDING_GIFS})
// export const responseTrendingGifs = data => ({type:RESPONSE_TRENDING_GIFS, data})