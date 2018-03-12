export const DETAIL_FETCH_GIPH = 'DETAIL/FECTH_GIPH'
export const DETAIL_FETCH_GIPH_SUCCESS = 'DETAIL/FECTH_GIPH_SUCCESS'
export const DETAIL_FETCH_GIPH_FAILED = 'DETAIL/FECTH_GIPH_FAILED'
export const DETAIL_DELETE_GIPH = 'DETAIL/DELETE_GIPH'

export const detailFetchGiph = id => ({
  type: DETAIL_FETCH_GIPH,
  payload: {
    id
  }
})

export const detailFetchGiphSuccess = giph => ({
  type: DETAIL_FETCH_GIPH_SUCCESS,
  payload: {
    giph
  }
})

export const detailFetchGiphFailed = () => ({
  type: DETAIL_FETCH_GIPH_FAILED
})

export const detailDeleteGiph = () => ({
  type: DETAIL_DELETE_GIPH
})
