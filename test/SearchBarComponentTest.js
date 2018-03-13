import React from 'react'
import {expect} from 'chai'
import { shallow } from 'enzyme'
import SearchBar from '../src/component/Searchbar'

describe('Test for Searchbar component', () => {
  let component
  beforeEach(() => {
    let props = {
      searchFunction: () => true,
      placeholder: "Search on the web"      
    }
    component = shallow(<SearchBar {...props}/>)

  })

  it('shows input element', () => {
    expect(component.find('.input')).lengthOf(1)
  })
  it('shows input element', () => {
    const dummyEvent = {
      target:{
        value: 'dummyQuery'
      }
    }
    component.find('.input').simulate('change', dummyEvent)
    expect(component.state('searchValue')).to.be.equal(dummyEvent.target.value)

  })
})