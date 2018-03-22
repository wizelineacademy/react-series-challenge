import reducer from "../ImageLoaderReducer";
import actions from "../ImageLoaderActions";

describe("ImageLoader reducer", () => {
  it("should return the default state", () => {
    expect(reducer(undefined, {})).toEqual({ loaded: {} });
  });

  it("should return a loaded image", () => {
    const expectedState = { loaded: { 1: true } };
    const state = reducer(undefined, actions.creators.imageLoaded(1));
    expect(state).toEqual(expectedState);
  });
});
