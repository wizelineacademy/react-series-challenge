import { asyncActionType } from '../utils';

export const SET_CURRENT_GIF = "SET_CURRENT_GIF";
export const setCurrentGif = element => (
  { type: SET_CURRENT_GIF, payload: { element } }
);

export const GET_GIF = asyncActionType("GET_GIF");
export const getGifId = id => (
  { type: GET_GIF.PENDING, payload: { id } }
);
export const getGifIdSuccess = (gif) => (
  { type: GET_GIF.SUCCESS, data: { gif }}
);
export const getGifIdError = (message) => (
  { type: GET_GIF.ERROR, data: { message } }
);
