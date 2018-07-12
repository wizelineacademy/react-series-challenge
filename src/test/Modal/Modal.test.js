import React from 'react';
import { mount } from 'enzyme';
import { AddGiftModal } from '../../components/Modal/AddGiftModal';
import toJson from 'enzyme-to-json'

describe('test', () => {
  it('will work', () => {
    const hidefn = jest.fn();
    const addfn = jest.fn(); 
    const component = mount(<AddGiftModal 
                                isModalOpen 
                                gift={{"url":"cdcdxs", "name":"dcdjc"}} 
                                favorites={{"cdcd":"dcdcd"}}
                                hideGiftModal={hidefn}
                                addFavorite={addfn}/>);
    
    component.find('#hide').first().simulate('click');
    expect(hidefn).toHaveBeenCalled();
    
    component.find('#fav').first().simulate('click');
    expect(addfn).toHaveBeenCalled();
      
    expect(toJson(component)).toMatchSnapshot();
  });
  it('will work', () => {
    const hidefn = jest.fn();
    const component = mount(<AddGiftModal 
                                isModalOpen ={false}
                                gift={{"url":"cdcdxs", "name":"dcdjc"}} 
                                favorites={{"cdcd":"dcdcd"}}
                                hideGiftModal={hidefn}/>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
