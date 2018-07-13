import React from 'react';
import { shallow } from "enzyme";
import { mockGif } from "../../mocks";

import GifListView from "../../../components/MainPanel/GifListView";

describe('GifListView', () => {
  
  it('Component should match snapshot', () => {
    expect(shallow(<GifListView data={[mockGif]} />)).toMatchSnapshot();
  })

})
