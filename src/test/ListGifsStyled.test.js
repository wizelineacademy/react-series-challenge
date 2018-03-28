import React from 'react';
import { shallow } from 'enzyme';
import { FavButton as PureComp } from '../components/ListGifs/ListGifs.styled';

const baseProps = {
    faved: true
}

describe('test ListGifs Render', () => {
    it('render structure', () => {
      const component = shallow(<PureComp  {...baseProps} />);
      expect(component).toMatchSnapshot();
    });
  });