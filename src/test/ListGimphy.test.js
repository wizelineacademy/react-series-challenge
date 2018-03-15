import React from 'react'
import {expect} from 'chai'
import { shallow } from 'enzyme'
import ListGimphy from '../component/ListGimphy'

describe('Test ListGimphy component', () => {
  it('shows component', () => {
    const props = {
      gimphyId: 'dimmyId',
      title: 'dummytitle',
      url: 'dummyURL',
      selected: true,
      handleOnclick:() => null,
      showDetailButton: true
    }
    const component = shallow(<ListGimphy {...props}/>)
    expect(component).lengthOf(1)
  })

  it('does not shows detail button', () => {
    const props = {
      gimphyId: 'dimmyId',
      title: 'dummytitle',
      url: 'dummyURL',
      selected: true,
      handleOnclick:() => null,
    }
    const component = shallow(<ListGimphy {...props}/>)
    expect(component.find('Styled(Link)')).lengthOf(0)
  })

  it('shows detail button', () => {
    const props = {
      gimphyId: 'dimmyId',
      title: 'dummytitle',
      url: 'dummyURL',
      selected: true,
      handleOnclick:() => null,
      showDetailButton: true
    }
    const component = shallow(<ListGimphy {...props}/>)
    expect(component.find('Styled(Link)')).lengthOf(1)
  })

  it('evaluate detail button link', () => {
    const props = {
      gimphyId: 'dimmyId',
      title: 'dummytitle',
      url: 'dummyURL',
      selected: true,
      handleOnclick:() => null,
      showDetailButton: true
    }
    const expectedProp = `/gimphy_details/${props.gimphyId}`
    const component = shallow(<ListGimphy {...props}/>)
    expect(component.find('Styled(Link)').prop('to')).to.be.equal(expectedProp)
  })

  it('evaluate InfoMessage selected false', () => {
    const props = {
      gimphyId: 'dimmyId',
      title: 'dummytitle',
      url: 'dummyURL',
      selected: false,
      handleOnclick:() => null,
      showDetailButton: true
    }
    const component= shallow(<ListGimphy {...props}/>)
    expect(
      component.find('.info-message').render().text()
    ).to.be.equal('Click on the Gimphy to save it as favorite')
  })

  it('evaluate InfoMessage selected true', () => {
    const props = {
      gimphyId: 'dimmyId',
      title: 'dummytitle',
      url: 'dummyURL',
      selected: true,
      handleOnclick:() => null,
      showDetailButton: true
    }
    const component= shallow(<ListGimphy {...props}/>)
    expect(
      component.find('.info-message').render().text()
    ).to.be.equal('This Gimphy is save on favorites.To remove click on image')
  })

  it('evaluate InfoMessage selected true', () => {
    const props = {
      gimphyId: 'dimmyId',
      title: 'dummytitle',
      url: 'dummyURL',
      selected: true,
      handleOnclick:() => null,
      showDetailButton: true
    }
    const component= shallow(<ListGimphy {...props}/>)
    expect(
      component.find('.info-message').render().text()
    ).to.be.equal('This Gimphy is save on favorites.To remove click on image')
  })

  it('foo', () => {
    const props = {
      gimphyId: 'dimmyId',
      title: 'dummytitle',
      url: 'dummyURL',
      selected: true,
      handleOnclick:() => null,
      showDetailButton: true
    }
    const component= shallow(<ListGimphy {...props}/>)
    expect(component.dive()).lengthOf(1)
  })

})