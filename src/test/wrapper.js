import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './fakes';

const addWrapper = (component) =>
  (<Provider store={ Store }>{component}</Provider>);

export default addWrapper;
