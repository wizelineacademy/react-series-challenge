import actions from "./../../constants/actions";
import reducer, { initialState } from "./../local";

describe("local reducer >", () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {ids: [], likes: []}
    )
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

  // it('should handle LOCALSTORAGE_DATA', () => {
  //   // This func overwrite previous one
  //   const data = { likes: [{ example: 1 }], ids: ['randomNum'] };
  //   expect(reducer({}, {
  //     type: actions.LOCALSTORAGE_DATA, payload: {
  //       data
  //     }
  //   })).toEqual(data)
  // });


});