export const GET_TRENDING_GIF  = 'GET_TRENDING_GIF';
export const SEARCH_GIF = 'SEARCH_GIF';
export const GET_TRENDING_GIF_FAILED = 'GET_TRENDING_GIF_FAILED';
export const SEARCH_GIF_FAILED = 'SEARCH_GIF_FAILED';

export function receiveTrendingGifs(products) {
  return {
    type: GET_TRENDING_GIF,
    products: products,
  }
}

export function searchGif(result) {
  return{
    type: SEARCH_GIF,
    searchResult: result,
  }
}