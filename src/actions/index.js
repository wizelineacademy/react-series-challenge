export const GET_TRENDING_GIF  = 'GET_TRENDING_GIF';
export const GET_TRENDING_GIF_SUCCESS  = 'GET_TRENDING_GIF_SUCCESS';
export const GET_TRENDING_GIF_FAILED  = 'GET_TRENDING_GIF_FAILED';

export function receiveTrendingGifs(products) {
    return {
      type: GET_TRENDING_GIF,
      products: products,
    }
  }