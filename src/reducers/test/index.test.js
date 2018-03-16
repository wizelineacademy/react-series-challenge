import {createStore} from "redux";
import rootReducer from "../index";
import trending from "../trending";
import favorites from "../favorites";

describe('Root reducer', () => {
  let store = createStore(rootReducer);

  it('should return initial states', function () {
    expect(store.getState().trending).toEqual(trending(undefined, {}));
    expect(store.getState().favorites).toEqual(favorites(undefined, {}));
  });
});
