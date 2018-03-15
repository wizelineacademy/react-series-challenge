import React from 'react';
import GiphyDetails from '../../src/components/GiphyDetails';
import { Loader } from '../../src/components/GiphyDetails/GiphyDetails.styled'

import { shallow, mount } from 'enzyme';
// import sinon from 'sinon';

describe('GiphyDetails --',() => {

  test('GiphyDetails mounts', () => {
    const props = {
      isLoading: false,
      giphy:  {
        isFav: false,
        id:"3oEduXtXta9onVDlIc",
        images: {
          preview_gif: 'myPreview',
          downsized_large: 'MyLargeImage'
        },
        title :"sad dog GIF by The BarkPost "
      }
    } 
    const wrapper = shallow(<GiphyDetails  {...props}/>);
    expect(wrapper).toHaveLength(1);
  });

  test('GiphyDetails Loader', () => {
    const props = {
      isLoading: true,
      giphy:  {
      }
    } 
    const wrapper = mount(<GiphyDetails {...props}/>);
    const inst = wrapper.find(Loader);
    expect(inst).toHaveLength(1);
  });


  test('GiphyDetails on fav', () => {
    const props = {
      isLoading: false,
      giphy:  {
        isFav: false,
        id:"3oEduXtXta9onVDlIc",
        images: {
          preview_gif: 'myPreview',
          downsized_large: 'MyLargeImage'
        },
        title :"sad dog GIF by The BarkPost "
      },
      onFavClick: jest.fn()
    } 
    const wrapper = mount(<GiphyDetails {...props}/>);
    wrapper.find('input').simulate('change');
    expect(props.onFavClick.mock.calls.length).toEqual(1);
  });


})