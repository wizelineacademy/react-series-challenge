import { put, select } from "redux-saga/effects";
import moxios from "moxios";

import { fetchingData } from "./../fetch";
import selectors from "./../../selectors";
import actions from "./../../actions";


describe('SAGA local >', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should trigger on FETCH_REQUEST', () => {
    let currentYield;

    const iterator = fetchingData();

    currentYield = iterator.next().value;
    expect(currentYield).toEqual(put(actions.fetchStart()));

    // assert
    currentYield = iterator.next().value;
    expect(currentYield).toEqual(select(selectors.fetch_word));

    currentYield = iterator.next().value;
    expect(currentYield).toEqual(0);
  });
});
