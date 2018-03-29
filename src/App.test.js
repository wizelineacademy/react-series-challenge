import React from 'react';
import { shallow } from 'enzyme'

import App from './App';




describe('Favorites tests',()=>{
    it('render',()=>{
        const component = shallow(
            <App/>
                
           )
        
        expect(component).toMatchSnapshot()
       
        
    })
})
