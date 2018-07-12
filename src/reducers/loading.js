import { SET_LOADING } from '../actions/types';

const initialState = {
  loading: true,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LOADING:
      const loading = payload;
      return { loading };
    default:
      return state;
  }
}
