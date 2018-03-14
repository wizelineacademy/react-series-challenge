export const SELECTED_GIF_CHANGE = 'SELECTED_GIF_CHANGE';
export const SELECTED_GIF_REMOVE = 'SELECTED_GIF_REMOVE';
export const SELECTED_GIF_REQUEST_INFO = 'SELECTED_GIF_REQUEST_INFO';

export const selectedGifChange = (gif) => ({
  type: SELECTED_GIF_CHANGE,
  payload: gif
});

export const selectedGifRemove = () => ({
  type: SELECTED_GIF_REMOVE
});

export const selectedGifRequestInfo = (gifId) => ({
  type: SELECTED_GIF_REQUEST_INFO,
  payload: gifId
});
