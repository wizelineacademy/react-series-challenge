import React from 'react';
import { mount } from 'enzyme';
import  { GiftItem } from '../components/giftItem.js';
import toJson from 'enzyme-to-json';

describe('test', () => {
  it('will work', () => {
    const onclickfn = jest.fn()
    const component = mount(<GiftItem 
                                    url={"https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy-preview.gif"}
                                    name={"item.title"}
                                    id={"item.id"}
                                    key={1}
                                    showGiftModal={onclickfn}/>);

    component.find('img').simulate('click');
    expect(onclickfn.mock.calls.length).toBe(1);

    expect(toJson(component)).toMatchSnapshot();
  });
});
