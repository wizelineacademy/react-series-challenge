import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import List from '../../../components/gif/List';

describe('Favorites component', () => {
  test('should render correctly that is loading if i passed loading=true', () => {
    const component = shallow(<List loading={true} />);

    expect(shallowToJson(component)).toMatchSnapshot();
  });

  test('should render correctly that is loading if i passed loading=false', () => {
    const component = shallow(<List loading={false} gifs={{}} />);

    expect(shallowToJson(component)).toMatchSnapshot();
  });

  test('should be able to render gifs', () => {
    const fakeGifs = {
      1: {
        title: 'best meme'
      }
    };

    const component = shallow(
      <List loading={false} gifs={fakeGifs} favorites={{}} />
    );

    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
