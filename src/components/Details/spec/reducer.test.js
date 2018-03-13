import reducer from "../DetailsReducer";
import actions from "../DetailsActions";

const initialState = {
  gif: {},
  loaded: false
};

describe("DetailsReducer", () => {
  it("returns the default state", () => {
    const expectState = Object.assign(initialState);
    const state = reducer(undefined, {});
    expect(state).toEqual(expectState);
  });

  it("returns loaded as false when gif requested", () => {
    const expectState = {
      gif: {},
      loaded: false
    };
    const state = reducer(undefined, actions.creators.gifRequested());
    expect(state).toEqual(expectState);
  });

  it("returns the details of the gif", () => {
    const expectState = {
      loaded: true,
      gif: { id: 1 }
    };
    const state = reducer(
      undefined,
      actions.creators.gifLoaded({ gif: { id: 1 } })
    );
    expect(state).toEqual(expectState);
  });

  it("returns an error on fetch failed", () => {
    const error = new Error("fake");
    const expectState = {
      loaded: false,
      gif: {},
      error
    };
    const state = reducer(undefined, actions.creators.gifFailed({ error }));
    expect(state).toEqual(expectState);
  });
});
