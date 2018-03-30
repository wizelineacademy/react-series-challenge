import { SET_PAGINATOR } from '../actions/types';

const initialState = {
  currentPage: 1,
  nextPage: 1,
  prevPage: 1,
  totalPages: 1
}

export default function (state = initialState, {type, payload}) {
  switch(type){
    case SET_PAGINATOR:
      const newPaginator = { ...payload };
      return { ...newPaginator };
    default:
      return state;
  }
}