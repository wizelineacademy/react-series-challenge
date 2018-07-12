import actions from "./../../constants/actions";
import reducer, { initialState } from "./../local";

describe("local reducer >", () => {

  const emptyState = { ids: [], likes: [] };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(emptyState)
  });

  it('should handle LOCALSTORAGE_DATA', () => {
    // This func overwrite previous one
    const data = { likes: [{ example: 1 }], ids: ['randomNum'] };
    expect(reducer({}, {
      type: actions.LOCALSTORAGE_DATA, payload: {
        data
      }
    })).toEqual(data)
  });

  it('should handle LOCALSTORAGE_MODIFY when add', () => {
    const object = { id: 'myRandomId', randomData: { a: 1, b: 2 } };
    const result = { likes: [object], ids: [object.id] };
    // This func overwrite previous one
    expect(reducer(emptyState, {
      type: actions.LOCALSTORAGE_MODIFY, payload: {
        object
      }
    })).toEqual(result)
  });

  it('should handle LOCALSTORAGE_MODIFY when remove', () => {
    const object = { id: 'myRandomId', randomData: { a: 1, b: 2 } };
    const result = { likes: [object], ids: [object.id] };

    // This func overwrite previous one
    expect(reducer(result, {
      type: actions.LOCALSTORAGE_MODIFY, payload: {
        object
      }
    })).toEqual(initialState)
  });

  it('should handle LOCALSTORAGE_FIND', () => {
    const filter = 'myFilter'
    // This func overwrite previous one
    expect(reducer(initialState, {
      type: actions.LOCALSTORAGE_FIND, payload: {
        filter
      }
    })).toEqual({ ...initialState, filter })
  });


});