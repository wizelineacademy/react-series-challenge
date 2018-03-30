import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import DetailsView from '../components/DetailsView';
import initializeStore from '../config/store';
import mockedState from './mockedState';
import {DETAILS_VARIABLE_PATH} from '../config/routerConstants';

describe('DetailsView', () => {

  it('Should render correctly', () => {
    const output = shallow(
      <DetailsView store={initializeStore(null)}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render with a mocked unmarked gif', () => {
    const output = shallow(
      <DetailsView store={initializeStore(mockedState)}
        gifDetails={mockedState.gifs.displayed[0]}
        match={{
          params: {
            [DETAILS_VARIABLE_PATH]: mockedState.gifs.displayed[0].id
          }
        }}/>
    );
    output.setProps({
      match: {
        params: {
          [DETAILS_VARIABLE_PATH]: mockedState.gifs.displayed[0].id
        }
      }
    });
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render with a mocked marked gif', () => {
    const output = shallow(
      <DetailsView store={initializeStore(mockedState)}
        gifDetails={mockedState.gifs.favorites[0]}
        match={{
          params: {
            [DETAILS_VARIABLE_PATH]: mockedState.gifs.favorites[0].id
          }
        }}/>
    );
    output.setProps({
      match: {
        params: {
          [DETAILS_VARIABLE_PATH]: mockedState.gifs.displayed[0].id
        }
      }
    });
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render correctly with a mocked state', () => {
    const output = shallow(
      <DetailsView store={initializeStore(mockedState)}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
