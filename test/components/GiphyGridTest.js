import React from 'react';
import { GiphyGrid } from '../../src/components/Giphy';
import { shallow, mount } from 'enzyme';
// import sinon from 'sinon';

describe('GiphyGrid --',() => {

  test('GiphyGrid mounts', () => {
    const wrapper = shallow(<GiphyGrid />);
    const inst = wrapper.instance()
    expect(inst).toBeInstanceOf(GiphyGrid);
  });

  test('GiphyGrid Values func', () => {
    const wrapper = mount(<GiphyGrid />);
    const obj = {
      "id" :{ data: "myData"},
      "id2" :{ data: "myData2"}
    }
    const result = wrapper.instance().values(obj);
    expect(result.constructor).toEqual(Array);
    expect(result.length).toEqual(2);
    expect(result).toEqual([{ data: "myData"},{ data: "myData2"}]);
  });

  test('GiphyGrid renderPreviews func', () => {
   
    const arr = [{
        isFav: false,
        id:"3oEduXtXta9onVDlIc",
        images: {
          preview_gif: 'myPreview',
          downsized_large: 'MyLargeImage'
        },
        title :"sad dog GIF by The BarkPost "
      }]
      const wrapper = mount(<GiphyGrid data={ arr }/>);
    const result = wrapper.instance().renderPreviews();
    expect(result).toHaveLength(1);
    expect(mount(result[0]).find('GiphyPreview') ).toHaveLength(1);
});
})