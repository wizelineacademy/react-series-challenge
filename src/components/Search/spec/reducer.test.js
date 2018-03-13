import actions from "../SearchActions";
import reducer from "../SearchReducer";

const initialState = {
  loaded: false,
  gifs: []
};

describe("SearchReducer", () => {
  it("returns the default state", () => {
    const expectState = Object.assign(initialState);
    const state = reducer(undefined, {});
    expect(state).toEqual(expectState);
  });

  it("returns a list of gifs for a search completed", () => {
    const expectState = {
      loaded: true,
      gifs: [{ id: 1 }]
    };
    const state = reducer(
      undefined,
      actions.creators.searchCompleted([{ id: 1 }])
    );
    expect(state).toEqual(expectState);
  });

  it("returns the default state", () => {
    const expectState = Object.assign(initialState);
    const state = reducer(undefined, {});
    expect(state).toEqual(expectState);
  });
});
