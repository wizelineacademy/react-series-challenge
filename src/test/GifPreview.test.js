import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import {BrowserRouter as Router} from 'react-router-dom';

import GifPreview from '../components/GifPreview';

const mockedGif = {
  id: 'mockId',
  images: {
    preview_gif: {
      width: 200,
      height: 200
    }
  }
};

describe('GifPreview', () => {
  it('Should render correctly', () => {
    const output = shallow(
      <GifPreview/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it ('Should render unmarked gif', () => {
    const output = shallow(
      <GifPreview gifDetails={mockedGif} alt="test" marked={false}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  })

  it ('Should render marked gif', () => {
    const output = shallow(
      <GifPreview gifDetails={mockedGif} alt="test" marked={true}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it ('Should render escaled gif x2', () => {
    const output = shallow(
      <GifPreview gifDetails={mockedGif} alt="test" marked={true}
        escaleFactor={2}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should simulate a click', () => {
    const output = shallow(
      <GifPreview gifDetails={mockedGif} alt="test" marked={false}/>
    );
    output.simulate('click');
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should simulate a click with router', () => {
    const output = shallow(
      <Router>
        <GifPreview gifDetails={mockedGif} alt="test" marked={false}/>
      </Router>
    );
    output.simulate('click');
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
