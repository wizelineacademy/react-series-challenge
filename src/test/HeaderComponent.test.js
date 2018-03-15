import React from 'react'
import {expect} from 'chai'
import { shallow } from 'enzyme'
import Header from '../component/Header'

describe('Test Header component', () => {
  let component
  beforeEach(() => {
    component = shallow(<Header />)
  })

  it('shows a component', () => {
    expect(component).lengthOf(1)
  })

  it('evaluete links', () => {
    expect(component.find('Link').at(0).prop('to')).to.be.equal('/')
    expect(component.find('Link').at(1).prop('to')).to.be.equal('/favorites')
  })

})