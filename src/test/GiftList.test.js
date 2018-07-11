import React from 'react';
import { shallow, render } from 'enzyme';
import  { GiftList } from '../components/Views/Home';

describe('test', () => {
  it('will work', () => {
    const component = shallow(<GiftList 
                                gifts={["","","","","",""]}/>);
    expect(component).toMatchSnapshot();
  });
});
