import actions from "./../constants/actions";

export const initialState = {
  likes: [],
  ids: [],
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.LOCALSTORAGE_DATA: {
      const { data } = payload;

      let newState = { ...state };
      const keys = Object.keys(data);

      if (keys.length > 0) {
        newState = { ...data };
      }

      return newState;
    }
    case actions.LOCALSTORAGE_MODIFY: {
      const { object } = payload;

      const newState = { ...state };
      const checkIndex = newState.ids.indexOf(object.id);

      if (checkIndex > -1) {
        newState.ids.splice(checkIndex, 1);
        const index = newState.likes.findIndex(el => el.id === object.id)
        newState.likes.splice(index, 1);
      } else {
        newState.ids.push(object.id);
        newState.likes.push(object);
      }

      return newState
    }
    case actions.LOCALSTORAGE_FIND: {
      const { filter } = payload;

      return {
        ...state,
        filter
      }
    }
    default:
      return state
  }
}