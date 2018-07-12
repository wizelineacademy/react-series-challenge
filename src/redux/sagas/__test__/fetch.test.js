import { put, select } from "redux-saga/effects";
import { fetchingData } from "./../fetch";

import selectors from "./../../selectors";

import actions from "./../../actions";

describe('SAGA local >', () => {

  it('should trigger on FETCH_REQUEST', () => {
    let currentYield;

    const iterator = fetchingData();

    currentYield = iterator.next().value;
    expect(currentYield).toEqual(put(actions.localSetData(simulateLocal)));

    // assert
    currentYield = iterator.next().value;
    expect(currentYield).toEqual(put(actions.fetchChange('')));
  });
});
