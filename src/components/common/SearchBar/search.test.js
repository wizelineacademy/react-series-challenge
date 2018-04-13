import React from 'react'
import { shallow, mount } from 'enzyme';
import gifs from '../../../actions/gifs'
import SearchBar from './index';
import store from '../../../store';


describe('SearchBar tests',()=>{
    it('render',()=>{
        const component = shallow(
            
                <SearchBar store={store}/>
           ).dive()
        
        expect(component).toMatchSnapshot()
        
    })
    it('change text',()=>{
        const result = mount(<SearchBar store={store} />);
        result.find('input').simulate('change', { target: { value: '1234567890!!!' } });
        
    })

    it('submit text',()=>{
        const result = mount(<SearchBar store={store} searchFunction={gifs.creators.searchGifsRequested}/>);
        result.find('form').simulate('submit');
        
    })
  
})