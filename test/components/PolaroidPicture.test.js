import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { MemoryRouter as Router } from 'react-router-dom';
import PolaroidPicture from '../../src/components/PolaroidPicture';

const IMAGE_URL = 'https://i.ytimg.com/vi/m5d1FlSeF-M/maxresdefault.jpg';
const IMAGE_ID = 'some_id';
const IMAGE_TITLE = 'some_title';

describe('PolaroidPicture', () => {
  let props;
  beforeEach(() => {
    props = {
      gif: {
        images: { original: { url: IMAGE_URL } },
        id: IMAGE_ID,
        title: IMAGE_TITLE,
        rating: 'n',
      },
      favorites: [],
      favoriteGif: jest.fn(),
      isSingleView: false,
      getGif: jest.fn(),
    }
  })

  it('should render correctly', () => {
    const tree = renderer
    .create(
      <Router><PolaroidPicture {...props} /></Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call favoriteGif callback when like button is clicked', () => {
    const output = shallow(
      <PolaroidPicture {...props} />
    );
    expect(props.favoriteGif.mock.calls.length).toBe(0);
    output.find('.like-button').simulate('click');
    expect(props.favoriteGif.mock.calls.length).toBe(1);
  });

  it('should call getGif callback when view button is clicked', () => {
    const output = shallow(
      <PolaroidPicture {...props} />
    );
    expect(props.getGif.mock.calls.length).toBe(0);
    output.find('.view-button').simulate('click');
    expect(props.getGif.mock.calls.length).toBe(1);
  });

  it('should call favoriteGif callback when like button is clicked', () => {
    const output = shallow(
      <PolaroidPicture {...props} />
    );
    expect(props.favoriteGif.mock.calls.length).toBe(0);
    output.find('.like-button').simulate('click');
    expect(props.favoriteGif.mock.calls.length).toBe(1);
  });

  it('should not render if gif is null', () => {
    const tree = renderer
    .create(
      <PolaroidPicture gif={null} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render appropiately if isSingleView', () => {
    props.isSingleView = true;
    const tree = renderer
    .create(
      <PolaroidPicture gif={null} />
    ).toJSON();

    expect(tree).toMatchSnapshot();    
  });

  it('should have easter egg if gif rating is r and isSingleView', () => {
    props.isSingleView = true;
    props.gif.rating = 'r';
    const tree = renderer
    .create(
      <PolaroidPicture gif={null} />
    ).toJSON();

    expect(tree).toMatchSnapshot();    
  });

});