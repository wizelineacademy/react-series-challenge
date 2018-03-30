import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import GifPreviewStyled from '../components/GifPreview/GifPreviewStyled';
import {GifPreviewDivContainter} from '../components/GifPreview/GifPreviewStyled';

describe('GifPreviewStyled', () => {
  it('Should render correctly', () => {
    const output = shallow(
      <GifPreviewStyled/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render with custom sizes', () => {
    const output = shallow(
      <GifPreviewStyled width={100} height={100}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render container correctly', () => {
    const output = shallow(
      <GifPreviewDivContainter/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render container correctly with custom sizes', () => {
    const output = shallow(
      <GifPreviewDivContainter width={200} height={200}/>
    );
    expect(output.prop('width')).toEqual(200);
    expect(output.prop('height')).toEqual(200);
  });
});
