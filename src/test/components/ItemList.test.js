import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ItemList } from '../../components';
import { Props } from '../fakes';
import wrap from '../wrapper';

let props;

describe('Component: ItemList', () => {
  beforeEach(() => {
    props = { ...Props };
  });

  describe('will load correctly', () => {
    it('when images is a blank object', () => {
      props.items.first.images = {};
      const component = renderer.create(wrap(<ItemList { ...props } />)).toJSON();
      expect(component).toMatchSnapshot();
    });

    it('when fixed_width is a blank object', () => {
      props.items.first.images = { fixed_width: {} };
      const component = renderer.create(wrap(<ItemList { ...props } />)).toJSON();
      expect(component).toMatchSnapshot();
    });

    it('when url exists', () => {
      props.items.first.images = { fixed_width: { url: 'fakeUrl' } };
      const component = renderer.create(wrap(<ItemList { ...props } />)).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
