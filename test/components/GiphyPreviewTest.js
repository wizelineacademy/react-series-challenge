import React from 'react';
import { GiphyPreview } from '../../src/components/Giphy';
import { shallow, mount } from 'enzyme';
// import sinon from 'sinon';

describe('GiphyGrid --',() => {

  test('GiphyGrid mounts', () => {
    const props = {
      preview_gif :{
        url: 'url'
      }, 
      onSelect: jest.fn(), 
      title: 'dummyText', 
      id: 'dummyId', 
      isFav: false, 
      onFavClick: jest.fn(),
      allData :{}
    }
    const wrapper = shallow(<GiphyPreview  {...props}/>);
    expect(wrapper).toHaveLength(1);
  });

  test('GiphyGrid onSelectWorks', () => {
    const props = {
      preview_gif :{
        url: 'url'
      }, 
      onSelect: jest.fn(), 
      title: 'dummyText', 
      id: 'dummyId', 
      isFav: false, 
      onFavClick: jest.fn(),
      allData :{}
    }
    const wrapper = mount(<GiphyPreview  {...props}/>);
    wrapper.find('img').simulate('click')
    expect(props.onSelect.mock.calls.length).toEqual(1);
    expect(props.onSelect.mock.calls[0][0]).toEqual('dummyId');

  });

  test('GiphyGrid onFav works', () => {
    const props = {
      preview_gif :{
        url: 'url'
      }, 
      onSelect: jest.fn(), 
      title: 'dummyText', 
      id: 'dummyId', 
      isFav: false, 
      onFavClick: jest.fn(),
      allData :{ data: 'all'}
    }
    const wrapper = mount(<GiphyPreview  {...props}/>);
    wrapper.find('input').simulate('change')
    expect(props.onFavClick.mock.calls.length).toEqual(1);
    expect(props.onFavClick.mock.calls[0][0]).toEqual({ data: 'all'});

  });
})