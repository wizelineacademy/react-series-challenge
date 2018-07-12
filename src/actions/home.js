import { createAction } from 'redux-actions';

import { GET_MORE_GIFS, UPDATE_GIFS } from './types';

export const getMoreGifs = createAction(GET_MORE_GIFS);
export const updateGifs = createAction(UPDATE_GIFS);

export default { getMoreGifs, updateGifs };
