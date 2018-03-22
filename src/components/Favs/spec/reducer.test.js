import reducer from "../FavsReducer";
import actions from "../FavsActions";

const initialState = {
  favs: []
};

describe("FavsReducer", () => {
  it("returns the default state", () => {
    const expectState = Object.assign(initialState);
    const state = reducer(undefined, {});
    expect(state).toEqual(expectState);
  });

  it("adds a new favorite", () => {
    const expectState = {
      favs: [{ id: 1, favorite: true }]
    };
    const state = reducer(
      undefined,
      actions.creators.toggleFavorite({ id: 1 })
    );
    expect(state).toEqual(expectState);
  });

  it("removes a favorite", () => {
    const expectState = { favs: [] };
    const currentState = { favs: [{ id: 1, favorite: true }] };
    const state = reducer(
      currentState,
      actions.creators.toggleFavorite({ id: 1, favorite: true })
    );
    expect(state).toEqual(expectState);
  });
});
