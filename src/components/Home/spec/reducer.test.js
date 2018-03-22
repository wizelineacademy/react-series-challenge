import reducer from "../HomeReducer";
import actions from "../HomeActions";

const initialState = {
  fetching: false,
  gifs: []
};

describe("HomeReducer", () => {
  it("returns the default state", () => {
    const expectState = Object.assign(initialState);
    const state = reducer(undefined, {});
    expect(state).toEqual(expectState);
  });

  it("marks fetching as true when trending requested", () => {
    const expectState = {
      fetching: true,
      gifs: []
    };
    const state = reducer(undefined, actions.creators.getTrendingRequested());
    expect(state).toEqual(expectState);
  });

  it("returns the trending gifs", () => {
    const expectState = {
      fetching: false,
      gifs: [{ id: 1 }]
    };
    const state = reducer(
      undefined,
      actions.creators.getTrendingCompleted({ data: [{ id: 1 }] })
    );
    expect(state).toEqual(expectState);
  });

  it("returns an error on fetch failed", () => {
    const error = new Error("fake");
    const expectState = {
      fetching: false,
      gifs: [],
      error
    };
    const state = reducer(
      undefined,
      actions.creators.getTrendingFailed({ error })
    );
    expect(state).toEqual(expectState);
  });
});
