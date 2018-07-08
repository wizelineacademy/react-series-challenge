import searchGifsActions from "../actions/searchGifs"

const initialState={
  type:"",
  payload:""
};

const searchGifsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case searchGifsActions.types.REQUEST_SEARCH_GIFS: {
      const { data } = payload;

      const newState = { ...data };

      return newState;
    }
    default:
      return state;
  }
};

export default searchGifsReducer;