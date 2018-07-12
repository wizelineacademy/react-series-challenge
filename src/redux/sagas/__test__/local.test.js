import { put, select } from "redux-saga/effects";
import { getLocalStorage, modifyLocalStorage } from "./../local";

import selectors from "./../../selectors";

import actions from "./../../actions";

describe('SAGA local >', () => {
  const simulateLocal = { like: ['item1'] };

  it('should trigger on LOCALSTORAGE_GET', () => {
    let currentYield;

    // Set Dummy local
    window.localStorage.setItem(process.env.LOCAL_STORAGE_KEY, JSON.stringify(simulateLocal))

    const iterator = getLocalStorage();

    currentYield = iterator.next().value;
    expect(currentYield).toEqual(put(actions.localSetData(simulateLocal)));

    // assert
    currentYield = iterator.next().value;
    expect(currentYield).toEqual(put(actions.fetchChange('')));
  });

  it('should trigger on LOCALSTORAGE_MODIFY', () => {
    let currentYield;

    // Set Dummy local
    window.localStorage.setItem(process.env.LOCAL_STORAGE_KEY, JSON.stringify(simulateLocal))

    const iterator = modifyLocalStorage();

    currentYield = iterator.next().value;
    expect(currentYield).toEqual(select(selectors.local));
    //

    iterator.next();
  });



});
