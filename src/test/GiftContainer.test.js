import React from 'react';
import { shallow } from 'enzyme';
import  { GiftContainer } from '../components/GiftContainer';

describe('test', () => {
  it('will work', () => {
    const component = shallow(<GiftContainer 
            searchBar={<span>Search Bar</span>}
            giftList={<span>Gift List</span>}/>);
    expect(component).toMatchSnapshot();
  });
});
