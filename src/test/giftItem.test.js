import React from 'react';
import { shallow } from 'enzyme';
import GiftItem from '../components/giftItem.js';

describe('test', () => {
  it('will work', () => {
    const component = shallow(<GiftItem 
                                    url={"https://media3.giphy.com/media/3ktRws88PRbBVbbYyE/giphy-preview.gif"}
                                    name={"item.title"}
                                    id={"item.id"}
                                    key={1}/>);
    expect(component).toMatchSnapshot();
  });
});
